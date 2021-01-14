import React from "react";

function Nav(props) {
    const {
        categories =[],
        setCurrentCategory,
        currentCategory
    } = props

    return(
        <nav >
            <ul className="flex-row flex-end">
            {categories.map((Category) => (
            <li
              className={`mx-3 ${ currentCategory.name === Category.name && 'navActive' }`}
              key={Category.name}
            >
              <span onClick={() => setCurrentCategory(Category)} >
                { Category.name }
              </span>
            </li>
          ))}
            </ul>
        </nav>
    );
}

export default Nav;