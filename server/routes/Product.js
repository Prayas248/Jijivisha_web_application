const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/Products/createProduct");
const { deleteProduct } = require("../controllers/Products/deleteproduct");
const { getAllProducts } = require("../controllers/Products/getallproducts");
const { updateProduct } = require("../controllers/Products/updateProduct");
const { createComment } = require("../controllers/Reviews/reviewcreate");
const { getAllReview } = require("../controllers/Reviews/getallreview");
const { signup } = require("../controllers/Auth/Auth");
const { login } = require("../controllers/Auth/Auth");
const { auth } = require("../middlewares/auth");
const { searchProductsByCategory } = require("../controllers/Products/findspecific");
const { getproductsbyID } = require("../controllers/Products/findbyid");
const { createCart } = require("../controllers/Cart/cartcreate");
const { deleteCart } = require("../controllers/Cart/deletecart");
const { getAllCartUser } = require("../controllers/Cart/getallcart");
const { createWishlist } = require("../controllers/Wishlist/createwishlist");
const { deleteWishlist } = require("../controllers/Wishlist/deletewishlist");
const { getAllWishlistUser } = require("../controllers/Wishlist/getallwishlist");
const {getCollection,getCollectionSub} = require("../controllers/Products/newcollection");
const {searchProducts} = require("../controllers/Products/searchbar");
const {createCoupon} = require("../controllers/Coupon/createcoupon")
const {getCouponbyCode} = require("../controllers/Coupon/findbycode");
const {createOrder} = require("../controllers/Order.js/createOrder");
const {getAllOrderUser} = require("../controllers/Order.js/getorderbyUser");
const {getAllOrders} = require("../controllers/Order.js/getallorder")
const {getOrdersbyID} = require("../controllers/Order.js/getorderbyID");
const {updateOrder} = require("../controllers/Order.js/updateorder");
const {updateCoupon} = require("../controllers/Coupon/updateCoupon");
const {createBlog} = require("../controllers/Blog/createblog");
const {getAllBlog} = require("../controllers/Blog/getallblog");
const {createBlogComment} = require("../controllers/Blog/createcomment");
const {getAllCommentforBlog} = require("../controllers/Blog/getAllCommentsForBlog");
const {updateBlog} = require("../controllers/Blog/updateBlog");
const {searchBlog} = require("../controllers/Blog/searchBlog");
const {createUser} = require("../controllers/User/createUserfromAdmin");
const {getAllUser} = require("../controllers/User/getAllUser");
const {searchUser} = require("../controllers/User/searchuser");
const {deleteUser} = require("../controllers/User/deleteuserbyId");
const {updateUser} = require("../controllers/User/updateUser");
const {getUserbyID} = require("../controllers/User/getUserbyID");
const {deleteOrder} = require("../controllers/Order.js/deleteOrder");
const {deleteBlog} = require("../controllers/Blog/deleteBlog");
const {getAllCoupon} = require("../controllers/Coupon/getAllCoupon");
const {searchCoupon} = require("../controllers/Coupon/searchcoupon");
const {getCommentBlogReview} = require("../controllers/AllComments/getAllComments");
const {searchComment} = require("../controllers/AllComments/searchComment");
const {createSize} = require("../controllers/SizeChart/createSizeChart");
const {getAllSizes} = require("../controllers/SizeChart/getAllSize");
const {searchSize} = require("../controllers/SizeChart/searchSize");
const {updateSize} = require("../controllers/SizeChart/updateSize");
const {getAllImage} = require("../controllers/Images/getallimages");
const {searchImage} = require("../controllers/Images/searchimages");
const {createGiftCard} = require("../controllers/GiftCard/createGiftCard");
const {deleteGiftCard} = require("../controllers/GiftCard/deleteGiftCard");
const {editGiftCardById} = require("../controllers/GiftCard/editGiftCardById");
const {getAllGiftCard} = require("../controllers/GiftCard/getAllGiftCard");
const {getGiftCardByCode} = require("../controllers/GiftCard/getGiftCardByCode");
const {searchGift} = require("../controllers/GiftCard/searchGift");
const {createCurrency} = require("../controllers/Currency/createCurrency");
const {deleteCurrency} = require("../controllers/Currency/deleteCurrency");
const {getAllCurrency} = require("../controllers/Currency/getAllCurrency");
const {searchCurrency} = require("../controllers/Currency/searchCurrency");
const {editCurrencyById} = require("../controllers/Currency/updateCurrency");
const {deleteCoupon} = require("../controllers/Coupon/deleteCard");
const {deleteAllComment} = require("../controllers/AllComments/deleteAllComment");
const {duplicateBlog} = require("../controllers/Blog/duplicateBlog");
const {getBlogbyID} = require("../controllers/Blog/getBlogId");
const {updateCart} = require("../controllers/Cart/updateCart");
const {payment} = require("../controllers/Order.js/payment");
const {verify} = require("../controllers/Order.js/payment");


router.post("/payment",payment);
router.post("/verify",verify);

router.post("/updateCart/:id",updateCart)

router.get("/getblogId/:id",getBlogbyID);

router.post("/duplicateBlog/:id",duplicateBlog);

router.post("/deleteAllComment",deleteAllComment)

router.post("/deleteCoupon",deleteCoupon);

router.post("/createCurrency",createCurrency);
router.post("/deleteCurrency",deleteCurrency);
router.get("/getAllCurrency",getAllCurrency);
router.get("/searchCurrency/:id",searchCurrency);
router.post("/editCurrencyById",editCurrencyById);


router.get("/searchGift/:id",searchGift);
router.post("/createGiftCard", createGiftCard)
router.post("/deleteGiftCard", deleteGiftCard)
router.post("/editGiftCardById", editGiftCardById)
router.get("/getAllGiftCard", getAllGiftCard)
router.post("/getGiftCardByCode", getGiftCardByCode)


router.get("/getAllImage",getAllImage);
router.post("/searchImage/:id",searchImage);

router.post("/createSize",createSize);
router.get("/getAllSizes",getAllSizes);
router.get("/searchSize/:id",searchSize);
router.post("/updateSize",updateSize);


router.get("/searchComment/:id",searchComment)
router.get("/getCommentBlogReview",getCommentBlogReview)

router.get("/searchCoupon/:id",searchCoupon);
router.get("/getAllCoupon",getAllCoupon);

router.post("/deleteBlog/:id",deleteBlog);


router.post("/deleteOrder/:id",deleteOrder);
router.get("/getUserbyID/:id",getUserbyID);
router.post("/updateUser/:id",updateUser);
router.post("/deleteUser",deleteUser);
router.get("/searchUser/:id",searchUser);
router.get("/getAllUser",getAllUser);
router.post("/createUser",createUser);

router.get("/searchBlog/:id",searchBlog);
router.post("/updateBlog:id",updateBlog);
router.get("/getAllCommentforBlog/:id",getAllCommentforBlog);
router.post("/createBlog",createBlog);
router.post("/createBlogComment/:id",createBlogComment);
router.get("/getAllBlog",getAllBlog);


router.post("/updateOrder/:id",updateOrder);
router.get("/getOrdersbyID/:id",getOrdersbyID);
router.get("/getAllOrders",getAllOrders);
router.get("/getAllOrderUser/:id",getAllOrderUser);
router.post("/createOrder",createOrder);

router.post("/updateCoupon/:id",updateCoupon);
router.get("/getCouponbyCode/:code",getCouponbyCode);
router.post("/createCoupon",createCoupon);

router.get("/searchProducts/:id",searchProducts);

router.get("/newcollection/:id",getCollection);
router.get("/newcollectionsub/:id",getCollectionSub);



router.get("/getallwishlist/:id",getAllWishlistUser);
router.post("/deletewishlist/:id",deleteWishlist);
router.post("/createwishlist",createWishlist);

router.post("/deletecart/:id",deleteCart);
router.post("/createcart",createCart);
router.get("/getallcart/:id",getAllCartUser);

router.get("/findspecific/:maincategory?/:subcategories?/:lastcategories?/:material?",searchProductsByCategory);
router.get("/getproductbyID/:id",getproductsbyID);

router.get("/test", auth, (req,res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})




router.post("/signup",signup);
router.post("/login",login);



router.post("/addreview", createComment);
router.get("/getallreviews/:id",getAllReview);


router.post("/addproduct", createProduct);
router.post("/deleteproduct",deleteProduct);
router.get("/getallproducts",getAllProducts);
router.post("/updateproduct/:id",updateProduct);

module.exports = router;
