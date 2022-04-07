# This package is no longer maintained.

---

<div  align="center">

<br>

# dangerous-discord.js

<br>

<p>
A Node.js API wrapper for Drivet's Dangerous Discord User Database
</p>

<br>

<p>
<br>

<a  href="https://www.npmjs.com/package/dangerous-discord.js"><img  src="https://img.shields.io/npm/v/dangerous-discord.js.svg?maxAge=3600"  alt="NPM version" /></a>
<a  href="https://www.npmjs.com/package/dangerous-discord.js"><img  src="https://img.shields.io/npm/dt/dangerous-discord.js.svg?maxAge=3600"  alt="NPM downloads" /></a>
<a  href="https://www.npmjs.com/package/dangerous-discord.js"><img  src="https://api.ghprofile.me/view?username=milanmdev-dangerous-discord.js&label=repository%20view%20count&style=flat"  alt="Repository view count" /></a>

</p>

<br>

<p>
<a  href="https://nodei.co/npm/dangerous-discord.js/"><img  src="https://nodei.co/npm/dangerous-discord.js.png?downloads=true&stars=true"  alt="npm installnfo" /></a>
</p>
</div>

# Example

```js
const { Client } = require("dangerous-discord.js");

const client = new Client({
  token: "your token here", // You only need to specify a token if you plan to use the "Client#report" method
});

// Use the functions below to fetch and/or report users:
(async () => {
  await client.getUser("userID").then((data) => console.log(data)); // { reports: 5, users_reported: 0 }
  await client.report("userID", "reason").then((data) => console.log(data)); // [ { author: '423203831971708958', reported: '681621708301533194', type: 'Other', reason: 'Testing', created_at: '1643669555539', modified_at: null } ]
})();
```
