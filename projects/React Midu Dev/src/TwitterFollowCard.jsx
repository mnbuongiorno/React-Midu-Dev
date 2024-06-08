export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://avatars.githubusercontent.com/u/135436604?v=4"
          alt="Buongiorno's Avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">
            Follow
            </button>
      </aside>
    </article>
  );
}
