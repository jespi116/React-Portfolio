import React, { useEffect } from "react";

function Nav(props) {
    const {
        categories =[],
        setCurrentCategory,
        currentCategory
    } = props

    //this useeffect is responsible for changing document title based on current category
    useEffect(() => {
      document.title = currentCategory.name;
    }, [currentCategory]);

    return(
        <nav >
            <ul className="flex-row flex-end">
            {categories.map((Category) => ( //maps through categories to create nav bar; onclick changes to current category
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