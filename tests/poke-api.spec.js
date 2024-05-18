const { test } = require("@playwright/test");

test("Pokemon information", async ({ request }) => {
  const pokemon = await request.get("pokemon/squirtle");
  let pokeJson = await pokemon.json();
  console.log(await pokeJson.moves[12].move.name);
});
