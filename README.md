# NogiPersona

# TL;DR
It's an upgraded version of the old project [NogiFiles](https://github.com/lynda0214/nogifiles/tree/master), which is a website for quickly looking up the profiles of the Nogizaka 46 members.

# What's New
In this new version, I not only updated the old information, but also practice some new trending stuffs:

- react-hooks

  Back to the times of making 'NogiFiles', react hook was not yet a dominant trend in React developing.

- [TailwindCSS](https://tailwindcss.com/docs/responsive-design)

- [react-router-v6](https://reactrouter.com/en/main)

  The old project uses HashRouter, in this project, I'd like to embrace the new technology of the react-router-v6.

  ⚠️ github-page doesn't support client-routing ([reference](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing))

- Netlify Deployment

- Loading images without **Cumulative Layout Shift** ([CLS](https://web.dev/cls/))

  I tried to convert all the image resources to [Progressive JPEG](https://www.thewebmaster.com/progressive-jpegs/) but it didn't work out as expected. It seems to be helpful for **Largest Contentful Paint** ([LCP](https://web.dev/lcp/)) not for CLS.

  the shell script for converting all images to progressive images was like this:
  ```bash
  #!/bin/bash
  # Loop through all the .jpg files in the directory
  for file in *.jpg; do
      # Check if the file is a regular file
      if [[ -f "$file" ]]; then
          # Create a temporary file name
          temp_file="${file%.jpg}_temp.jpg"
          
          # Transform the image to progressive JPEG using jpegtran
          jpegtran -progressive -copy none -outfile "$temp_file" "$file"
          
          # Replace the original file with the progressive JPEG
          mv "$temp_file" "$file"
          
          echo "Converted $file to progressive JPEG."
      fi
  done

  echo "All .jpg files converted to progressive JPEG."
  ```

  Hence, I then use the `div` to paint the placeholder before the image was loaded to address the CLS issues.

# Demo
https://nogipersona.netlify.app/