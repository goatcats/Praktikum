# Preview

![ezgif com-gif-maker](https://user-images.githubusercontent.com/2930941/189086776-e23c9c78-6f18-4cdb-808e-2c49b28abe56.gif)

# Who's that pokemon

This project will test everything you learned so far and more. There are no real descriptions of what you need to do, but the client that wants the project send you a preview of the result.   
Try to recreate a similar result as shown in the gif above.

If you think you are stuck or don't know what to do.
- Try to recapture the step you want to achieve in your head. 
- If that makes the idea clearer but not the solution try to google what you want to do.
- If that doesn't help feel free to ask another developer for advice. 



# Steps
## Github
- Create an account
- Init your project
- Work on your Project
- Publish/Commit your progress
## HTML
- Make a layout grid to visualize the structure of the page
- Create an index.html with all the necessary structure 
## CSS
- Add a style.css file to index.html and add styling to alter the page the way the preview looks
- To save resources add a 
## JS
- Write down all steps that are necessary to achieve the given result
    > You can try to make a Flow Diagram (**Ask for help if needed**)
- Get info about a Pokemon from an API
- Create a RandomInt helper function
- If you want you can use [jQuery](http://api.jquery.com/jquery/) to help you with all functions
 ``` html 
<script src="https://code.jquery.com/jquery-3.6.3.min.js"
			  integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
			  crossorigin="anonymous"></script>
```


# Usefull resources

### How to load Pokemon info
> `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`  
> This API needs the pokeid without leading zeros   

> `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeId}.png`  
> This API needs the pokeid in a 3 diget format  

<details>
  <summary>Example</summary>

``` js
    /**
     * Fetching a random Pokemon form PokeApi
     */
    function fetchPokeApi(pokeId) {
        console.info("Loading pokedex data for id: " + pokeId);

        return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((error) => console.warn(error));
    }
```

</details>


### How to create a siluett from an image 
> No need for 2 images if we can alter the existing one
<details>
  <summary>Example</summary>

``` css
    #pokemon {
        filter: brightness(0%);
    }

    #pokemon.show {
        filter: brightness(100%);
    }
```
</details>