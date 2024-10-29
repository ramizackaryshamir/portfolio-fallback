import Nav from "./Nav.jsx";

export default function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "30px",
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <article
          className="copperplate"
          style={{
            color: "black",
            fontSize: "15px",
          }}
        >
          Rami Zackary Shamir
        </article>
        <Nav />
      </header>
    </>
  );
}
