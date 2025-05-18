const Avatar = ({ avatarUrl }) => {
  return <img src={avatarUrl} alt="avatar" />;
};
const Card = ({ name, bio, avatarUrl }) => {
  return (
    <div className="card">
      <div className="header">
        <h4>{name}</h4>
        <Avatar avatarUrl={avatarUrl} />
      </div>
      <div className="body">
        <p>{bio}</p>
      </div>
    </div>
  );
};
export function App() {
  return (
    <Card
      name={"Akash"}
      bio={"i am new full stack developer"}
      avatarUrl={"pic1.jpg"}
    />
  );
}
