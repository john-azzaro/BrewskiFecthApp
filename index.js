"use strict";

function getBreweries(state) {
    const settings = {
      url: `https://api.openbrewerydb.org/breweries?by_state=${state}`,
      dataType: 'json',
      type: 'GET',
      success: displayResults,
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  }
  

  function displayResults(responseJson) {
    const breweries = responseJson.map((brewery) => {
      return `
        <li>
          <a href="${brewery.website_url}">${brewery.name}</a>
        </li>
      `
    }).join("\n");     // .join("\n") makes a new line 
    $('.js-search-results').html(`<ul>${breweries}</ul>`);
  }


function handleFormSubmit() {
    $('form').submit(function(event) {
      event.preventDefault();
      const state = $('#searchstate').val();
      getBreweries(state, displayResults);
      $('#searchstate').val("");
    });
  }

function setUpEventHandlers() {
    handleFormSubmit()
}

  function initializeApp() {
      setUpEventHandlers()
  }

  $(initializeApp)



