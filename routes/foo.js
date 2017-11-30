var express = require("express");
var router = express.Router();

// GET STARTED HERE:
// https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md

// THIS IS A MODEL, YOU CAN REFERENCE THIS AS IN LINE: 54 or 86
/**
 * @swagger
 * definitions:
 *   Foo:
 *     type: object
 *     required:
 *       - first_name
 *       - last_name
 *       - email
 *     properties:
 *       id:
 *         type: integer
 *         readOnly: true
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       email:
 *         type: string
 *       role:
 *         type: string
 *         enum: [jobseeker, recruiter, owner]
 *       age:
 *         type: integer
 */

// THIS IS THE KIND OF STUFF YOU'LL WRITE TO DOCUMENT THE SERVICES
/**
 * @swagger
 * /foo:
 *   get:
 *     description: Returns an array with all the foos
 *     tags:
 *      - Foo
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: foo
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Foo'
 */
router.get("/", (req, res, next) => {
  res.send([
    {
      id: req.params.foo_id,
      first_name: "Shaq",
      last_name: "Smith",
      email: "CoolEmail@gjobchat.com",
      age: 19
    },
    {
      id: req.params.foo_id,
      first_name: "Yisus",
      last_name: "Appleseed",
      email: "AnotherCoolEmail@gjobchat.com",
      age: 18
    }
  ]);
});

/**
 * @swagger
 * /foo/{foo_id}:
 *   get:
 *     description: Returns the foo with foo_id
 *     tags:
 *      - Foo
 *     parameters:
 *       - name: foo_id
 *         description: id of the foo.
 *         in: path
 *         type: integer
 *         required: true
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: foo
 *         schema:
 *           $ref: '#/definitions/Foo'
 */
router.get("/:foo_id", (req, res, next) => {
  res.send({
    id: req.params.foo_id,
    first_name: "Rohit",
    last_name: "Smith",
    email: "CoolEmail@gjobchat.com",
    age: 06
  });
});

/**
 * @swagger
 * /foo:
 *   post:
 *     description: Returns de foo with foo_id
 *     tags:
 *      - Foo
 *     parameters:
 *       - name: body
 *         description: foo object
 *         in: body
 *         type: string
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Foo'
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: foo
 *         schema:
 *           $ref: '#/definitions/Foo'
 */
router.post("/", function(req, res, next) {
  const id = Math.floor(Math.random() * 100) * 1;
  const foo = { id, ...req.body };
  res.json(foo);
});

module.exports = router;
