"""Team Members CRUD – raw psycopg2."""

import json
from fastapi import APIRouter, Depends, HTTPException
from app.database import get_db, fetchall, fetchone, execute_returning, execute
from app.auth import get_current_admin
from app.schemas import TeamMemberCreate, TeamMemberUpdate

router = APIRouter(prefix="/api/team", tags=["Team Members"])


def _serialize_social(row: dict) -> dict:
    """Ensure the social field is always a dict, not a JSON string."""
    if row and "social" in row:
        val = row["social"]
        if isinstance(val, str):
            try:
                row["social"] = json.loads(val)
            except Exception:
                row["social"] = {}
        elif val is None:
            row["social"] = {}
    return row


@router.get("")
def list_team_members(conn=Depends(get_db)):
    rows = fetchall(conn, "SELECT * FROM team_members ORDER BY created_at DESC")
    return [_serialize_social(r) for r in rows]


@router.post("")
def create_team_member(body: TeamMemberCreate, conn=Depends(get_db), _=Depends(get_current_admin)):
    row = execute_returning(conn,
        "INSERT INTO team_members (name, role, avatar, bio, social) VALUES (%s,%s,%s,%s,%s) RETURNING *",
        (body.name, body.role, body.avatar, body.bio, json.dumps(body.social or {}))
    )
    return _serialize_social(row)


@router.put("/{item_id}")
def update_team_member(item_id: int, body: TeamMemberUpdate, conn=Depends(get_db), _=Depends(get_current_admin)):
    if not fetchone(conn, "SELECT id FROM team_members WHERE id=%s", (item_id,)):
        raise HTTPException(status_code=404, detail="Team member not found")
    payload = body.model_dump(exclude_unset=True)
    social_val = json.dumps(payload["social"]) if "social" in payload else None
    row = execute_returning(conn,
        "UPDATE team_members SET name=COALESCE(%s,name), role=COALESCE(%s,role), avatar=COALESCE(%s,avatar), bio=COALESCE(%s,bio), social=COALESCE(%s::jsonb,social), updated_at=now() WHERE id=%s RETURNING *",
        (payload.get("name"), payload.get("role"), payload.get("avatar"), payload.get("bio"), social_val, item_id)
    )
    return _serialize_social(row)


@router.delete("/{item_id}")
def delete_team_member(item_id: int, conn=Depends(get_db), _=Depends(get_current_admin)):
    if not fetchone(conn, "SELECT id FROM team_members WHERE id=%s", (item_id,)):
        raise HTTPException(status_code=404, detail="Team member not found")
    execute(conn, "DELETE FROM team_members WHERE id=%s", (item_id,))
    return {"message": "Team member deleted"}
