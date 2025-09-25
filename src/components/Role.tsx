import "../styles/signup.css";

interface RoleProps {
  role: string;
  onRoleChange: (role: string) => void;
}

function Role({ role, onRoleChange }: RoleProps) {
  return (
    <div className="roleDiv">
      <form>
        <label className="roleOption">
          <input
            type="radio"
            name="role"
            value="Artist"
            checked={role === "Artist"}
            onChange={(e) => onRoleChange(e.target.value)}
          />
          Artist
        </label>

        <label className="roleOption">
          <input
            type="radio"
            name="role"
            value="Band"
            checked={role === "Band"}
            onChange={(e) => onRoleChange(e.target.value)}
          />
          Band
        </label>

        <label className="roleOption">
          <input
            type="radio"
            name="role"
            value="Musician"
            checked={role === "Musician"}
            onChange={(e) => onRoleChange(e.target.value)}
          />
          Musician
        </label>
      </form>
    </div>
  );
}

export default Role;
