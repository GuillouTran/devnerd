import styled from "styled-components";

// Navbar styles
export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #353866;
  color: white;
  padding: 2rem;
  .app-logo {
    font-size: 2rem;
    @media (max-width: 30em) {
      margin-right: 1rem;
    }
  }
`;

// Search styles.
export const SearchStyle = styled.div`
  position: relative;
  > input {
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 6px 7px;
    border: none;
    width: 22rem;
    &:focus {
      outline: none;
    }
  }
`;
// Search Results
export const SearchResultsStyle = styled.ul`
  font-size: 1.2rem;
  position: absolute;
  background: #efaa2e;
  text-transform: capitalize;
  color: #403f3f;
  width: 100%;
  max-height: 30vh;
  overflow-y: scroll;
  .search-item {
    padding: 1rem 0.5rem;
    &:not(:last-of-type) {
      border-bottom: 1px solid #464646;
    }
    &:hover {
      background: #d09224;
      cursor: pointer;
    }
  }
`;

// Home styles.
export const HomeStyle = styled.div`
  text-align: center;
  width: 80rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  .filters-row {
    display: flex;
    margin: 7px 0;
    @media (max-width: 30em) {
      flex-direction: column;
    }
  }
  svg {
    /* our svg on the home page*/
    width: 8rem;
    height: 8rem;
  }
`;

// Add todo.
export const AddTodoStyle = styled.div`
  display: flex;
  margin: 3rem 0;
  .new-todo-input {
    border: none;
    padding: 1.8rem 7px;
    border-radius: 4px;
    width: 100%;
  }
  .add-todo-btn {
    font-size: 1.5rem;
    color: white;
    background: #bd1550;
    border: none;
    border-radius: 2px;
    padding: 1rem 4rem;
    margin-left: 10px;
  }
`;

// Filters Style.
export const VisibilityFiltersStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  @media (max-width: 30em) {
    padding-bottom: 1rem;
  }
  .todo-filter {
    display: flex;
    align-items: center;
    label {
      padding: 0 3px 0 4px;
    }
    &:not(:first-of-type) {
      margin-left: 2rem;
    }
    .radio-btn {
      appearance: button;
      border: 2px solid #ccc;
      border-top-color: #bbb;
      border-left-color: #bbb;
      background: #fff;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      &:checked {
        border: 5px solid #4099ff;
      }
    }
  }
`;

// Make done btn
export const MakeAllDoneBtnStyle = styled.button`
  margin-left: auto;
  padding: 1rem 0.5rem;
  border-radius: 6px;
  background: #566270;
  color: white;
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
  > svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

// Todo list style.
export const TodosStyle = styled.ul`
  font-size: 1.4rem;
  text-align: left;
`;

// Todo item style.
export const TodoItemStyle = styled.li`
  font-size: 1.4rem;
  width: 100%;
  color: #424242;
  background: #fdc5bb;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  align-items: center;
  box-shadow: 0px 0px 37px -8px rgb(133, 105, 138);
  a {
    margin-right: auto;
  }
  .todo-title {
    text-decoration: ${props =>
      props.completed === true ? "line-through" : "none"};
    margin-left: 6px;
    text-transform: capitalize;
  }
  > svg {
    /*Close icon*/
    width: 2.3rem;
    height: 2.3rem;
    cursor: pointer;
  }
  /* .edit-input {
    background: none;
    border: none;
    padding: 1rem 0.5rem;
    width: 100%;
  } */
`;

// todo page style.
export const TodoPageStyle = styled.div`
  display: flex;
  width: 80rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 10rem 0;
  > li {
    margin: 0 !important;
  }
  a {
    display: contents;
  }
  .edit-button,
  button {
    cursor: pointer;
    display: flex;
    background: #fdc23e;
    border: none;
    padding: 0.6rem;
    border-radius: 2px;
    color: white;
    font-size: 1.3rem;
    margin-left: 10px;
    > span {
      margin-right: 10px;
    }
    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const EditTodoStyle = styled.div`
  width: 100%;
  > input {
    border: none;
    padding: 1.8rem 7px;
    border-radius: 4px;
    width: 100%;
    font-size: 1.3rem;
  }
`;
