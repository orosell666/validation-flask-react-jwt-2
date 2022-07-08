"""empty message

Revision ID: c8c3980e155c
Revises: 1b6e657972a9
Create Date: 2022-07-08 18:00:37.228019

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c8c3980e155c'
down_revision = '1b6e657972a9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###
