// const {ethers}=require('ethers');

async function main(){
  const SimpleStorageFactory=await ethers.getContractFactory(
    "SimpletStorage"
  )
  const simpleStorage=await SimpleStorageFactory.deploy()
  await simpleStorage.deployed()
}

main().then(()=>process.exit(1)).catch((error)=>{
  console.error(error);
  process.exit(0)
})