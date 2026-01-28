// ProfileCard.jsx
function ProfileCard({ name, role }) {
  return (
    <div className="card shadow-lg border-0 mb-4">
      <div className="card-body text-center p-5">
        <div className="avatar mb-3 mx-auto rounded-circle bg-primary d-flex align-items-center justify-content-center" 
             style={{width: '80px', height: '80px'}}>
          <h3 className="text-white mb-0">{name.charAt(0)}</h3>
        </div>
        <h2 className="card-title mb-2">{name}</h2>
        <h5 className="text-primary mb-3">{role}</h5>
        <button className="btn btn-outline-primary">View Profile</button>
      </div>
    </div>
  );
}

export default ProfileCard;
