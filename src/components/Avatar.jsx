function Avatar() {
  console.log(import.meta.env);
  return (
    <div className="fixed top-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
      <a
        href="https://cupofcraft.dev"
        title="Andrea Barghigiani"
        target="_blank"
      >
        <img
          src={import.meta.env.BASE_URL + "images/andrea-barghigiani.jpg"}
          alt="Andrea Barghigiani"
          className="h-14 w-14 rounded-full"
        />
      </a>
    </div>
  );
}

export default Avatar;
