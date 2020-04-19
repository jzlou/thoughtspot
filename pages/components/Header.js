import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>about</a>
    </Link>
    <style jsx> {`
      a {
        color: blue;
      }
      a:hover {
        background-color: grey;
      }
    `} </style>
 </div>
);

export default Header;
