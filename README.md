# Three page car rental application

## Table of Contents

1. [Structure](#structure)
2. [Filtering](#filtering)
3. [Routing](#routing)
4. [Backend](#backend)

# Structure

## Welcome page

Familiarizes the user with the application. Perform navigation.

## Catalogue

The page on which all available cars for rent are displayed. You can apply
filtering for a more accurate model selection. After clicking the "Rent" button,
a modal window will open to confirm the rental. You can also add cars to the
favorites

_(while it is stored in the local storage, after adding authorization, you will
be able to add the selected cars to your profile and review the rental history)_

## Favorite

This page displays cars that have been added to the selection on the "Catalog"
page. The rental functionality is similar to the "Catalog".

## Modal Window

Clicking on the "Learn more" button opens a modal window with detailed
information about the car and its rental conditions. The modal window can be
closed by clicking the "x" button, clicking on the backdrop, or pressing the Esc
key.

## Filtering

Added filtering by car brand using a dropdown with car brands.

## Routing

Used React Router to create routes:

- "/" - the home page
- "/catalog" - the page with the car catalog
- "/favorites" - the page with favorite listings

A user who enters a non-existent route will be redirected to the home page.

## Backend

For working with listings, a personal backend was created using
[mockapi.io](https://mockapi.io/)
