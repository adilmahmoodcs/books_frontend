import { Route, Routes as RouterRoutes } from "react-router-dom";
import { SidebarLayout } from "../layouts";
import { AuthorBooksListing, AuthorsListing } from "../pages";

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<SidebarLayout />}>
        <Route path="/" element={<AuthorsListing />} />
        <Route path="/:authorId/books" element={<AuthorBooksListing />} />
      </Route>
    </RouterRoutes>
  );
}

export default Routes;
