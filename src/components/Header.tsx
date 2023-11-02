// src/components/Header.tsx

import Link from "next/link";
import { Nav, Navbar } from "reactstrap";
import styles from "../../styles/MenuSuperior.module.css";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" className={styles.menusuperior} passHref>
        <h2 className="navbar-brand">Início</h2>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" className={styles.menusuperior}>
          <h2 className="nav-link me-2">Produtos</h2>
        </Link>
        <Link href="/cart" className={styles.menusuperior}>
          <h2 className="nav-link">Carrinho</h2>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
