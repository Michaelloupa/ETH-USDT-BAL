import express from "express";
import { getEthBalance, getusdtBalance } from "../helpers/helpers";

const router = express.Router();

router.get("/", (req:any, res:any) =>{
    res.status(200).send({
        status: "success",
        msg: "Connected to the ETH/USDT balance test project"
    })
});



//usdtbalance route
router.post("/usdtBalance", async (req:any, res:any) =>{
    const address = req.body;
    const usdtbalance = await getusdtBalance(address)

    res.send({
        message: 'Data received successfully',
        yourDataReceived: usdtbalance
      });
})

//ethbalance route

router.post("/ethBalance", async (req:any, res:any) =>{
    const address = req.body;
    const ethbalance = await getEthBalance(address)

    res.send({
        message: 'Data received successfully',
        yourethbalance: ethbalance
      });
})

export default router;

module.exports = router;