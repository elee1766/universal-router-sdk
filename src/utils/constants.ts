import { BigNumber } from 'ethers'

type ChainConfig = {
  router: string
  creationBlock: number
  weth: string
  permit2?: string
  steth: string
  wsteth: string
}

export const NOT_SUPPORTED_ON_CHAIN = '0x0000000000000000000000000000000000000000'

const CHAIN_CONFIGS: { [key: number]: ChainConfig } = {
  // mainnet
  [1]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    steth: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    wsteth: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
    creationBlock: 17143817,
  },
  // goerli
  [5]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    steth: '0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',
    wsteth: '0x6320cD32aA674d2898A68ec82e869385Fc5f7E2f',
    creationBlock: 8940568,
  },
  // sepolia
  [11155111]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 3543575,
  },
  // polygon
  [137]: {
    router: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
    weth: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 46866777,
  },
  //polygon mumbai
  [80001]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 35176052,
  },
  //optimism
  [10]: {
    router: '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8',
    weth: '0x4200000000000000000000000000000000000006',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 108825869,
  },
  // optimism goerli
  [420]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0x4200000000000000000000000000000000000006',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 8887728,
  },
  // arbitrum
  [42161]: {
    router: '0x5E325eDA8064b456f4781070C0738d849c824258',
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 125861718,
  },
  // arbitrum goerli
  [421613]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 18815277,
  },
  // celo
  [42220]: {
    router: '0x643770e279d5d0733f21d6dc03a8efbabf3255b4',
    weth: NOT_SUPPORTED_ON_CHAIN,
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 21116361,
  },
  // celo alfajores
  [44787]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: NOT_SUPPORTED_ON_CHAIN,
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 17566658,
  },
  // binance smart chain
  [56]: {
    router: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 31254967,
  },
  // avalanche
  [43114]: {
    router: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
    weth: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 34491144,
  },
  // base goerli
  [84531]: {
    router: '0xd0872d928672ae2ff74bdb2f5130ac12229cafaf',
    weth: '0x4200000000000000000000000000000000000006',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 6915289,
  },
  // base mainnet
  [8453]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0x4200000000000000000000000000000000000006',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 3229053,
  },
  //moonbeam
  [1284]: {
    router: '0x1F56F4e1648e96633c7FE79002036E967403CDfF',
    permit2: '0xe96e30e92e01dc8a880f701b2d2160f93da18df7',
    weth: '0x30d2a9f5fdf90ace8c17952cbb4ee48a55d916a7',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 3340490,
  },
  // boba
  [288]: {
    router: '0x4ba622997559f9b5ac68751d7fc3deecc23a0e88',
    weth: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
    creationBlock: 969351,
    permit2: '0xF80c91442D3EF66632958C0d395667075FC82fB0',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //zksync
  [324]: {
    router: '0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06',
    weth: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
    creationBlock: 12640979,
    permit2: '0x0000000000225e31d15943971f47ad3022f714fa',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //xlayer
  [196]: {
    router: '0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc',
    weth: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',
    creationBlock: 4346684,
    permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //gnosis
  [100]: {
    router: '0x75FC67473A91335B5b8F8821277262a13B38c9b3',
    weth: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    creationBlock: 35719251,
    permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //bob
  [60808]: {
    router: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
    weth: '0x4200000000000000000000000000000000000006',
    creationBlock: 5369968,
    permit2: '0xCbe9Be2C87b24b063A21369b6AB0Aa9f149c598F',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //lisk
  [1135]: {
    router: '0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8',
    weth: '0x4200000000000000000000000000000000000006',
    creationBlock: 578844,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //zklink
  [810180]: {
    router: '0x2274bDE50218DDB955e7f60e4f2344e3Bff9D193',
    weth: '0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169',
    creationBlock: 4404950,
    permit2: '0xc9fd50fc93f2a82d07d2b8c09ebe904317d5f7f6',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //taiko
  [167000]: {
    router: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
    weth: '0xA51894664A773981C6C112C43ce576f315d5b1B6',
    creationBlock: 2382,
    permit2: '0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  // sei
  [1329]: {
    router: '0xa683c66045ad16abb1bCE5ad46A64d95f9A25785',
    weth: '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7',
    creationBlock: 79447543,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //mantle
  [5000]: {
    router: '0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8',
    weth: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    creationBlock: 63841377,
    permit2: '0x5d6b0f5335ec95cD2aB7E52f2A0750dd86502435',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //sei testnet
  [713715]: {
    router: '0x61a27a55f72bbCba64554246BCE2da43C164543B',
    weth: '0x57eE725BEeB991c70c53f9642f36755EC6eb2139',
    creationBlock: 16342547,
    permit2: '0x0C88d2842Bf80B7728486D5a02F6BC222d50d45B',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //linea
  [59144]: {
    router: '0xd7c7d7f18dd5388d5217c9696c7e799fcd75c6bd',
    weth: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
    creationBlock: 3609803,
    permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //blast
  [81457]: {
    router: '0x643770E279d5D0733F21d6DC03A8efbABf3255B4',
    weth: '0x4300000000000000000000000000000000000004',
    creationBlock: 1116444,
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //polygon zkevm
  [1101]: {
    router: '0x32454e81d065FAA95Ec0d0Ab6Fe326599Af30fd7',
    weth: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
    creationBlock: 8467040,
    permit2: '0xCEc9e219281B78E1946b6b894f75ae89Bc10FEb6',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //scroll
  [534352]: {
    router: '0x595E7160858b1AdA94Bda790D8699C85e595117E',
    weth: '0x5300000000000000000000000000000000000004',
    creationBlock: 1380,
    permit2: '0xD75ca8A1F18DB1f48e500269111071308cFe718A',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //manta
  [169]: {
    router: '0x42Bff1f6b647462fcD8c28a488Be9C9988830ef6',
    weth: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
    creationBlock: 1199217,
    permit2: '0x83986Ff655A54ee061F6B7F476B92f4Fed111B93',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //rootstock
  [30]: {
    router: '0x244f68e77357f86a8522323eBF80b5FC2F814d3E',
    weth: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    creationBlock: 5830624,
    permit2: '0xFcf5986450E4A014fFE7ad4Ae24921B589D039b5',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //filecoin
  [314]: {
    router: '0x83702C6356A1028A900F83d446D189a31646a16b',
    weth: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
    creationBlock: 3255833,
    permit2: '0xb81363578d377F8DA3902e9e705FD60198a9cEc2',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //corn
  [21000000]: {
    router: '0x9db70E29712Cc8Af10c2B597BaDA6784544FF407',
    weth: '0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2',
    creationBlock: 10939,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //metal
  [1750]: {
    router: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
    weth: '0x4200000000000000000000000000000000000006',
    creationBlock: 10815185,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //sonic
  [146]: {
    router: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
    weth: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    creationBlock: 322921,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  [50]: {
    router: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
    weth: '0x951857744785e80e2de051c32ee7b25f9c458c42',
    creationBlock: 87231190,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //telos
  [40]: {
    router: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
    weth: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
    creationBlock: 386636864,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //hemi
  [43111]: {
    router: '0x533c7A53389e0538AB6aE1D7798D6C1213eAc28B',
    weth: '0x4200000000000000000000000000000000000006',
    creationBlock: 1293665,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //goat
  [2345]: {
    router: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
    weth: '0xbC10000000000000000000000000000000000000',
    creationBlock: 964033,
    permit2: '0xB952578f3520EE8Ea45b7914994dcf4702cEe578',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //redbelly
  [151]: {
    router: '0x1b35fbA9357fD9bda7ed0429C8BbAbe1e8CC88fc',
    weth: '0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076',
    creationBlock: 2286087,
    permit2: '0xdD489C75be1039ec7d843A6aC2Fd658350B067Cf',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //saga
  [5464]: {
    router: '0xa683c66045ad16abb1bCE5ad46A64d95f9A25785',
    weth: '0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA',
    creationBlock: 19318,
    permit2: '0x447B8E40B0CdA8e55F405C86bC635D02d0540aB8',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //lightlink
  [1890]: {
    router: '0x738fD6d10bCc05c230388B4027CAd37f82fe2AF2',
    weth: '0xa683c66045ad16abb1bCE5ad46A64d95f9A25785',
    creationBlock: 131406742,
    permit2: '0x807F4E281B7A3B324825C64ca53c69F0b418dE40',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
  //worldchain
  [480]: {
    router: '0x8ac7bee993bb44dab564ea4bc9ea67bf9eb5e743',
    weth: '0x4200000000000000000000000000000000000006',
    creationBlock: 1737559557,
    permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    steth: NOT_SUPPORTED_ON_CHAIN,
    wsteth: NOT_SUPPORTED_ON_CHAIN,
  },
}

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].router
}

export const UNIVERSAL_ROUTER_CREATION_BLOCK = (chainId: number): number => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].creationBlock
}

export const WETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId].weth == NOT_SUPPORTED_ON_CHAIN) throw new Error(`Chain ${chainId} does not have WETH`)

  return CHAIN_CONFIGS[chainId].weth
}
export const RESOLVE_PERMIT2_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) return PERMIT2_ADDRESS
  if (CHAIN_CONFIGS[chainId].permit2 === undefined) return PERMIT2_ADDRESS
  return CHAIN_CONFIGS[chainId].permit2!
}

export const STETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId].steth == NOT_SUPPORTED_ON_CHAIN)
    throw new Error(`Chain ${chainId} does not have STETH support`)

  return CHAIN_CONFIGS[chainId].steth
}

export const WSTETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId].wsteth == NOT_SUPPORTED_ON_CHAIN)
    throw new Error(`Chain ${chainId} does not have WSTETH support`)

  return CHAIN_CONFIGS[chainId].wsteth
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
