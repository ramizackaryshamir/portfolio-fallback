import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <ul

      style={ {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '150px',
        listStyleType: 'none',
    }}
    >
      <li>
        <Link
          to="/"
          style={ {
            textDecoration: 'none',
            color: 'black',
            fontFamily: 'copperplate',
            fontSize: '15px'
          }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
           style={ {
            textDecoration: 'none',
             color: 'black',
             fontFamily: 'copperplate',
            fontSize: '15px'
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
