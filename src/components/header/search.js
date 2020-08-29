import React, { useState, useMemo, useRef } from 'react';
import classnames from 'classnames';
import { SearchIcon } from '../icons';

export default props => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const searchInput = useRef(null);

  const openSearch = () => {
    if (!isSearchOpen) {
      setSearchOpen(true)
      if (searchInput) {
        searchInput.current.focus()
      }
    }
  }

  const inputClasses = useMemo(() => {
    const classes = ["search"];

    if (isSearchOpen) {
      classes.push("search-open")
    }

    return classnames(classes)
  }, [isSearchOpen])

  const closeSearch = () => {
    setSearchOpen(false);    
  }

  return <div className="d-flex header-search">
    {!isSearchOpen && <SearchIcon className="mr-2" onClick={openSearch}/>}
    <input type="text" className={inputClasses} onBlur={closeSearch} ref={searchInput}/>
  </div>
}