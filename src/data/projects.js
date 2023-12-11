// Projects data.

const projects = [
	{
		id: 0,
		title: 'AlwaysLiquid',
		category: 'NFT marketplace',
		img: require('@/assets/images/projects/always-liquid.png'),
		url: 'https://scroll.alwaysliquid.com/'
	},
	{
		id: 0,
		title: 'Punk Domains',
		category: 'Identity',
		img: require('@/assets/images/projects/punk-domains.png'),
		url: 'https://punk.domains/'
	},
	{
		id: 0,
		title: 'Send2name',
		category: 'Send tokens',
		img: require('@/assets/images/projects/send2name.png'),
		url: 'https://send2.name'
	},
	{
		id: 0,
		title: 'DODO',
		category: 'DEX',
		img: require('@/assets/images/projects/dodo.png'),
		url: 'https://app.dodoex.io/?network=scroll&from=ETH&to=USDC'
	},
	{
		id: 0,
		title: 'Sushi',
		category: 'DEX',
		img: require('@/assets/images/projects/sushi.png'),
		url: 'https://www.sushi.com/swap'
	}

	// + Add 62 project - 12/11/2023
	,
	{
		id: 0,
		title: 'KyberSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/kyberswap.png'),
		url: 'https://kyberswap.com/swap/scroll'
	}
	,
	{
		id: 0,
		title: 'Orbiter Finance',
		category: 'Bridge',
		img: require('@/assets/images/projects/orbiter-finance.png'),
		url: 'https://www.orbiter.finance/?source=Ethereum&dest=Scroll&token=ETH'
	}
	,
	{
		id: 0,
		title: 'OpenOcean',
		category: 'Yield Farming',
		img: require('@/assets/images/projects/openocean.png'),
		url: 'https://app.openocean.finance/CLASSIC#/SCROLL/ETH/USDC'
	}
	,
	{
		id: 0,
		title: 'iZUMi Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/izumi-finance.png'),
		url: 'https://izumi.finance/trade/swap'
	}
	,
	{
		id: 0,
		title: 'AlienSwap',
		category: 'Launchpad',
		img: require('@/assets/images/projects/alienswap.png'),
		url: 'https://alienswap.xyz/'
	}
	,
	{
		id: 0,
		title: 'Symbiosis',
		category: 'DEX',
		img: require('@/assets/images/projects/symbiosis.png'),
		url: 'https://app.symbiosis.finance/swap?chainIn=Scroll&tokenIn=ETH'
	}
	,
	{
		id: 0,
		title: 'Rhino.fi',
		category: 'Bridge',
		img: require('@/assets/images/projects/rhino.fi.png'),
		url: 'https://app.rhino.fi/bridge?token=ETH&chainOut=SCROLL&chain=ETHEREUM'
	}
	,
	{
		id: 0,
		title: 'Syncswap',
		category: 'DEX',
		img: require('@/assets/images/projects/syncswap.jpg'),
		url: 'https://syncswap.xyz/swap'
	}
	,
	{
		id: 0,
		title: 'Satori Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/satori-finance.png'),
		url: 'https://scroll.satori.finance/'
	}
	,
	{
		id: 0,
		title: 'Owlto Finance',
		category: 'Bridge',
		img: require('@/assets/images/projects/owlto-finance.png'),
		url: 'https://owlto.finance/'
	}
	,
	{
		id: 0,
		title: 'OmniKingdoms',
		category: 'Gaming',
		img: require('@/assets/images/projects/omnikingdoms.png'),
		url: 'https://app.omnikingdoms.io/'
	}
	,
	{
		id: 0,
		title: 'Pheasant Network',
		category: 'Bridge',
		img: require('@/assets/images/projects/pheasant-network.png'),
		url: 'https://pheasant.network/'
	}
	,
	{
		id: 0,
		title: 'Cog Finance',
		category: 'Lending',
		img: require('@/assets/images/projects/cog.finance.png'),
		url: 'https://www.cog.finance/'
	}
	,
	{
		id: 0,
		title: 'Loanshark',
		category: 'Lending',
		img: require('@/assets/images/projects/loanshark-tech.png'),
		url: 'https://app.loanshark.tech/'
	}
	,
	{
		id: 0,
		title: 'ZKSynth',
		category: 'DEX',
		img: require('@/assets/images/projects/zksynth.png'),
		url: 'https://app.zksynth.com/'
	}
	,
	{
		id: 0,
		title: 'ChatNPC',
		category: 'Subscriptions',
		img: require('@/assets/images/projects/chatnpc.png'),
		url: 'https://chatnpc.gg/'
	}
	,
	{
		id: 0,
		title: 'Splatter Protocol',
		category: 'DEX',
		img: require('@/assets/images/projects/splatterprotocol.png'),
		url: 'https://www.splatterprotocol.xyz/app/swap'
	}
	,
	{
		id: 0,
		title: 'Scroll Name Service',
		category: 'Identity',
		img: require('@/assets/images/projects/scrollns.png'),
		url: 'https://app.scrollns.com/'
	}
	,
	{
		id: 0,
		title: 'Innovaz',
		category: 'Launchpad',
		img: require('@/assets/images/projects/innovaz.png'),
		url: 'https://innovaz.io/'
	}
	,
	{
		id: 0,
		title: 'Meson',
		category: 'Bridge',
		img: require('@/assets/images/projects/meson.fi.png'),
		url: 'https://meson.fi/'
	}
	,
	{
		id: 0,
		title: 'zkMarkets',
		category: 'NFT',
		img: require('@/assets/images/projects/zkmarkets.png'),
		url: 'https://www.zkmarkets.com/scroll-mainnet'
	}
	,
	{
		id: 0,
		title: 'SpaceFi',
		category: 'DEX',
		img: require('@/assets/images/projects/spacefi.png'),
		url: 'https://swap-scroll.spacefi.io/#/swap'
	}
	,
	{
		id: 0,
		title: 'NFTs2Me',
		category: 'Launchpad',
		img: require('@/assets/images/projects/nfts2me.png'),
		url: 'https://nfts2me.com/'
	}
	,
	{
		id: 0,
		title: 'NerveNetwork',
		category: 'DEX',
		img: require('@/assets/images/projects/nervenetwork.png'),
		url: 'https://nerve.network/swap'
	}
	,
	{
		id: 0,
		title: 'OKX DEX',
		category: 'DEX',
		img: require('@/assets/images/projects/okx-dex.png'),
		url: 'https://www.okx.com/web3/dex-swap#inputChain=534352&inputCurrency=SCROLL_ETH&outputChain=1&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
	}
	,
	{
		id: 0,
		title: 'Skydrome',
		category: 'DEX',
		img: require('@/assets/images/projects/skydrome.jpg'),
		url: 'https://app.skydrome.finance/swap'
	}
	,
	{
		id: 0,
		title: 'LayerBank',
		category: 'Lending',
		img: require('@/assets/images/projects/layerbank.png'),
		url: 'https://scroll.layerbank.finance/bank'
	}
	,
	{
		id: 0,
		title: 'Symmetry',
		category: 'DEX',
		img: require('@/assets/images/projects/symmetry.png'),
		url: 'https://symmetry.trade/trade'
	}
	,
	{
		id: 0,
		title: 'Metavault',
		category: 'DEX',
		img: require('@/assets/images/projects/metavault.png'),
		url: 'https://metavault.trade/apps/swap?meta=scroll+0x8c9E5E8eabB151667ab353F5395D646B0D973914'
	}
	,
	{
		id: 0,
		title: 'ISSUAA',
		category: 'Lending',
		img: require('@/assets/images/projects/issuaa.png'),
		url: 'https://app.issuaa.org/'
	}
	,
	{
		id: 0,
		title: 'Aboard.Exchange',
		category: 'DEX',
		img: require('@/assets/images/projects/aboard-exchange.png'),
		url: 'https://app.aboard.exchange/futures/#/scroll/ETH-USDC'
	}
	,
	{
		id: 0,
		title: 'Transit Swap',
		category: 'DEX',
		img: require('@/assets/images/projects/transit.png'),
		url: 'https://swap.transit.finance/?locale=en&inputChain=SCROLL&inputSymbol=ETH#/'
	}
	,
	{
		id: 0,
		title: 'XY Finance',
		category: 'Bridge',
		img: require('@/assets/images/projects/xy-finance.png'),
		url: 'https://app.xy.finance/'
	}
	,
	{
		id: 0,
		title: 'Eisen',
		category: 'DEX',
		img: require('@/assets/images/projects/eisenfinance.png'),
		url: 'https://app.eisenfinance.com/'
	}
	,
	{
		id: 0,
		title: 'Zebra',
		category: 'DEX',
		img: require('@/assets/images/projects/zebra.png'),
		url: 'https://app.zebra.xyz/#/swap?chain=scroll'
	}
	,
	{
		id: 0,
		title: 'Kreatorland',
		category: 'NFT',
		img: require('@/assets/images/projects/kreatorland.png'),
		url: 'https://kreatorland.com/'
	}
	,
	{
		id: 0,
		title: 'Ivy Maker',
		category: 'Launchpad',
		img: require('@/assets/images/projects/ivymaker.png'),
		url: 'https://ivymaker.io/'
	}
	,
	{
		id: 0,
		title: 'Ambient Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/ambient.png'),
		url: 'https://scroll.ambient.finance/trade/market/chain=0x82750&tokenA=0x0000000000000000000000000000000000000000&tokenB=0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4'
	}
	,
	{
		id: 0,
		title: 'OpenName',
		category: 'Identity',
		img: require('@/assets/images/projects/open-name.jpg'),
		url: 'https://app.open.name/'
	}
	,
	{
		id: 0,
		title: 'Interport Finance',
		category: 'Bridge',
		img: require('@/assets/images/projects/interport.png'),
		url: 'https://app.interport.fi/534352/1/ETH/ETH'
	}
	,
	{
		id: 0,
		title: 'Dmail Network',
		category: 'Web3 Social',
		img: require('@/assets/images/projects/dmail.png'),
		url: 'https://mail.dmail.ai/inbox'
	}
	,
	{
		id: 0,
		title: 'Mini Bridge',
		category: 'Bridge',
		img: require('@/assets/images/projects/minibridge.png'),
		url: 'https://minibridge.chaineye.tools/'
	}
	,
	{
		id: 0,
		title: 'Rubic',
		category: 'Bridge',
		img: require('@/assets/images/projects/rubic.png'),
		url: 'https://app.rubic.exchange/?fromChain=SCROLL&toChain=ETH&from=ETH&to=ETH'
	}
	,
	{
		id: 0,
		title: 'Element Market',
		category: 'NFT',
		img: require('@/assets/images/projects/element.png'),
		url: 'https://element.market/scroll'
	}
	,
	{
		id: 0,
		title: 'Aggre',
		category: 'DEX',
		img: require('@/assets/images/projects/aggre.png'),
		url: 'https://app.aggre.io/'
	}
	,
	{
		id: 0,
		title: 'NFTScan',
		category: 'Subscriptions',
		img: require('@/assets/images/projects/nftscan.png'),
		url: 'https://scroll.nftscan.com/'
	}
	,
	{
		id: 0,
		title: 'IceCreamSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/icecreamswap.png'),
		url: 'https://icecreamswap.com/swap?chainId=534352'
	}
	,
	{
		id: 0,
		title: 'OmniBTC',
		category: 'Bridge',
		img: require('@/assets/images/projects/omnibtc.jpg'),
		url: 'https://app.omnibtc.finance/swap'
	}
	,
	{
		id: 0,
		title: 'PixelSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/pixelswap.jpg'),
		url: 'https://app.pixelswap.xyz/#/swap'
	}
	,
	{
		id: 0,
		title: 'Wombat Exchange',
		category: 'DEX',
		img: require('@/assets/images/projects/wombat.jpg'),
		url: 'https://app.wombat.exchange/swap?chain=scroll'
	}
	,
	{
		id: 0,
		title: 'Rollie Finance',
		category: 'DEX',
		img: require('@/assets/images/projects/rollie.png'),
		url: 'https://www.rollie.finance/trading'
	}
	,
	{
		id: 0,
		title: 'Kurama',
		category: 'DEX',
		img: require('@/assets/images/projects/kurama.jpg'),
		url: 'https://app.kurama.app/swap'
	}
	,
	{
		id: 0,
		title: 'SecondLive',
		category: 'Launchpad',
		img: require('@/assets/images/projects/secondlive.png'),
		url: 'https://secondlive.world/'
	}
	,
	{
		id: 0,
		title: 'TaskOn',
		category: 'Quests',
		img: require('@/assets/images/projects/taskon.png'),
		url: 'https://taskon.xyz/'
	}
	,
	{
		id: 0,
		title: 'QuestN',
		category: 'Quests',
		img: require('@/assets/images/projects/questn.png'),
		url: 'https://app.questn.com/'
	}
	,
	{
		id: 0,
		title: 'OpenLeverage',
		category: 'Lending',
		img: require('@/assets/images/projects/openleverage.png'),
		url: 'https://scroll.openleverage.finance/app'
	}
	,
	{
		id: 0,
		title: 'Zenlink',
		category: 'DEX',
		img: require('@/assets/images/projects/zenlink.png'),
		url: 'https://app.zenlink.pro/swap'
	}
	,
	{
		id: 0,
		title: 'Zonic',
		category: 'NFT',
		img: require('@/assets/images/projects/zonic.png'),
		url: 'https://zonic.app/'
	}
	,
	{
		id: 0,
		title: 'Omnisea',
		category: 'Launchpad',
		img: require('@/assets/images/projects/omnisea.png'),
		url: 'https://omnisea.org/'
	}
	,
	{
		id: 0,
		title: 'SwapBox',
		category: 'Bridge',
		img: require('@/assets/images/projects/swapbox.png'),
		url: 'https://swapbox.nabox.io/swap?fromChain=Scroll&toChain=Scroll&from=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&to=0xf55bec9cafdbe8730f096aa55dad6d22d44099df'
	}
	,
	{
		id: 0,
		title: 'OKX NFT Marketplace',
		category: 'NFT',
		img: require('@/assets/images/projects/okx-nft.png'),
		url: 'https://www.okx.com/web3/marketplace/nft'
	}
];

export default projects;
