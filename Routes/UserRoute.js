const { Router} = require ("express");
const router = Router();
const UserController = require ("../controllers/UserController");

router.get("/users",UserController.getUsers);
router.get("/users:id",UserController.getUser);
router.post("/users",UserController.saveUser);
router.delete("/users/:id",UserController.deleteUser);
router.put("/users",UserController.updateUser);

module.exports = router;