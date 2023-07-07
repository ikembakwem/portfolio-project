import styled from "@emotion/styled";
import { Link } from "./Links";

const pageLinkData = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "About Me", link: "/about" },
];

export const Navigations = () => {
  return (
    <nav>
      <ListStyle>
        {pageLinkData.map((page) => (
          <ItemStyle key={page.name}>
            <Link href={page.link}>{page.name}</Link>
          </ItemStyle>
        ))}
      </ListStyle>
    </nav>
  );
};

const ListStyle = styled.ul`
  display: flex;
`;

const ItemStyle = styled.li`
  margin: 0 0.5rem;
`;
