const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center style={{ margin: "150px 0px" }}>
      <h1>There are no posts</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Post From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
