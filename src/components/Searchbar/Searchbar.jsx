import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBar, SearchForm, SearchInput } from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


export default function Searchbar ({onSubmit}) {
  
  const [searchName, setSearchName] = useState('')

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase())
  }

  const handleSearch = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return toast.error ('Please select any query');
    }
    onSubmit(searchName);
    setSearchName('');
  }

    return (
      <SearchBar>
          <SearchForm onSubmit={handleSearch}>
            <button aria-label="search" type="submit" >
              <FcSearch size="23px" />
            </button>

            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchName}
              onChange={handleNameChange}
            />
          </SearchForm>

      </SearchBar>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



