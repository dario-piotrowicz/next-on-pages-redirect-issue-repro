# next-on-pages redirect issue reproduction

## Steps

- Install the dependencies:
  ```
  npm i
  ```

- run the application using `next dev`:
  ```
  npm run dev
  ```

- in the app click on the `Go to /test` link

- click on the `Back to /` button

- notice that everything works as expected

- run the app in preview mode:
  ```
  npm run preview
  ```

- in the app click on the `Go to /test` link

- click on the `Back to /` button

- notice that that doesn't work (and generates an error in the terminal)

> [!IMPORTANT]
> This is a local-only issue, as it seems that in the deployed application
> things work as intended: https://next-on-pages-redirect-issue-repro.pages.dev/
