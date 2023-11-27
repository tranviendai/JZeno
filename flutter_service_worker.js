'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "dd8d2aa80953e1bc2ca7b9792c30ae59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "31d1d2b6c70b276552c73a609d458ff3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20aa004c679f30fbb86f726c7c6fca83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e645d217a179de8df5dcdfd6dc5bf0c8",
".git/logs/refs/heads/master": "e645d217a179de8df5dcdfd6dc5bf0c8",
".git/logs/refs/remotes/origin/master": "75cfeb852c06680beb048ceaf5d56c47",
".git/objects/00/35638cbfdffd9b22f1b63683ddd89a1a2c0bc2": "3a9e9c8abf4bb116de9028b40618150e",
".git/objects/03/9535198f469422f02f42677089d01ef20a3911": "c0bde7241ba2d87c287ed54d2f60afb1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/9baa625011174e9a96ba0895abddce58ae9ff0": "09bd002438aae3dcbd8666f3eceb8ec5",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/e0ec50709c51ef23690187d9559565f2a6aa94": "4f6519037290c03c7df3c2114b591d14",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/10/8413920cd66ff3794600196d4bc5759c270685": "3f169dc438d584b27f9666a8c0b9b713",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/4c938067c176ebdff7e22175b8b05fdf747105": "088f632243a3190b330f1773c18a547f",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/9687af5c5cff492bdf566d079f711dd216c4a8": "2647e00cd3653f084ba9dd0988d549ec",
".git/objects/22/17580e37e1fd0ccb9040dbe040dffb9ace2b5c": "ce299daf840df3c939c1d8895151a219",
".git/objects/24/729db7048bd7164f1b75d02507d95c421f1660": "748c0a6c032772aecc2a2a42a538179a",
".git/objects/28/dc06f917d546e1cd40948b290dd6e32c863c6e": "952f7438bca957e0fa45e953b84df1fb",
".git/objects/2c/2e1cebebccef429a211471fb99635b81ef4d1b": "4b459b12c5e7e08127f44bccde59b48a",
".git/objects/2c/e5be8e9bec4d366214511c36d8a2762a3ac353": "45d38017fe3baa3959d64a62354c2179",
".git/objects/2e/a9d1ffffdf5fb6ca0169c3d0e6424c22ba7f46": "8ba4655257f1343e0ae30c4177abd88d",
".git/objects/33/728ee1909677e21072202f45388268eec44723": "c42f79db23b61ad193df148794fd1522",
".git/objects/33/9fb5915d85c4a504128d7043e87e25f57e1424": "14138d4a48f3d53fb1723410b750c588",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3b/759ec4c4fde735dae559e0dfbcbf50641c1f3d": "2dae85bd3b07db15d85ef404ffa2483f",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/40/382c62679662b0a91d665fc18189b20176fcf3": "81e535b5b1906f9edeb83e3aee51f4cf",
".git/objects/40/4fc98b16ecb27abb226ac3692fbad8643efabd": "328d35e3004f2534182dc29f4fbf7dd6",
".git/objects/42/812d8d41f7527d7a96b1be119b4ab0c509bc2c": "d415fb0501779b519d69af61c5cb61c7",
".git/objects/43/5be948b1b9a06f6e0a3daf0b36b5cda47f6635": "c4bf144bf50908b32a9d0e8840303d05",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/388bb9036f2c5236f1438d7bfff4d0ed28efe6": "b9f26ac003515e4ff861544d2e5c1f68",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/930bbbc4aeb2bbca8b00156a3b90df91279bc5": "90a5ca5119e0c95916bef27938554b0c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/56830abee32a8d91f3a446e308a84aed848d63": "7dd5ae281d5ecf91923b86441e4f3dff",
".git/objects/51/5def6902441d2e12706eb17bd8f036975afd20": "b5deec1fd8066529b7421820dbffcf21",
".git/objects/53/a9cce2095fc41a85591a0bbf047bbeddebe4e2": "19f51b02e78586b659b0b90031e53163",
".git/objects/56/78e2a6e5ba72fa5b8979847ecc4e0ce2e7eb40": "a5f391c7fa417735dbba001268ef67e3",
".git/objects/59/e1b7df43a4c8c8514a9737cf92c415a01f3dd7": "49537286f898175fc2e9b3748680176b",
".git/objects/5f/37eafcc932ee98a7f723a3ceb4245d9752b68e": "50d9982b779342eabd904b9b52658aff",
".git/objects/60/7e0bf33ea9ef42350414677bec0d37bb830227": "1ba3eff9fcf89615fb454007be3ee41b",
".git/objects/61/62b3d096960b632c257a26ead2d31358534b2a": "bc0365e274976b6aeb1fc884084c72bf",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/a62bb491032ce610857ca7abd103526d55bf9d": "8a56e0da00eb1bb5240e1f43c8ea8ba1",
".git/objects/63/c0b05c9694b4663a74e69276e17dca8858cc66": "039132d092fcd4995015909acd0a3277",
".git/objects/65/f35118b024cca826d9dcdb59729d40bdef87b5": "1d2696ee61b1d82980e5a81a275be946",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/e9cf8b9370eada215ad665509aaa6b31bab79b": "a1a49a6b98ed8fe43b5b0499336b48a0",
".git/objects/6e/89e50581d91524ba3802ed7731d615feb8c695": "af0ad6445526e1fffad68ccafc208861",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/41602641dddfca2941240520b5c90a8b0d2124": "3618c1b4735eb7f23cb4f5b053a7592a",
".git/objects/72/b97d5fe13fccd56c9d7bc31c00fcf624647a9b": "11a289fdbfc6958ecfa1ef7764a9566a",
".git/objects/73/697cefcc6aa66a15ea2006f270c789dd94a55c": "3f74c29fa0c6aa7a25f9e2a7d70e2f4f",
".git/objects/7c/d77145ae50d38c69453410053fe873bc63d47e": "a966fb66763e0b610def6952d5871e28",
".git/objects/7e/23d9d402f80bcc788d981b6fed37258ce04ae0": "ade3f19766d6de4b0091c0657884eb51",
".git/objects/7f/47c8971fcf9c3c7074437e95b1850f22e74ee4": "e5d783122d9e95d23679c37aa0a2f8d1",
".git/objects/7f/f1eac9e006ea81de4aa4f74c6ebc5d35c42543": "6d873d3f16e87c376ef212ca4eb7cfa0",
".git/objects/82/333a7259118557b9b9a87b665ff1c72c2b46a6": "8351a4c93940a8a5b3847e0547874e09",
".git/objects/84/baf2055530d722ab33a8f05041a79158f63948": "b8f267264a71f128719f48df2dcf3c98",
".git/objects/88/79a3045b5a437007b8ed9dce67572d675a9872": "3f9e5a5774103a6d71f55659505b6264",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/223bb8de1be1c03eb6278c94b42fd9fd7b28f6": "23af54a53e3deefda35629d81ea591c1",
".git/objects/8a/2d322c43b21de62327c82c508a1f46e67b03ba": "47bb7fccbb98d981a9188ba633d72999",
".git/objects/8a/6b34591ddb6502dc6eb6f66d5c91598667aa2b": "e3c65b0a1423521555256477ff0d9edb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/04f397dfcaa99c0262d932fc8fa333590e6339": "63bff4b2c70ecc85485fcf7c54dcba4c",
".git/objects/93/2e7018681264838cd2b18b731b5ab690d3dd97": "fcfedadd15bcf45daa8bea2f7f46db74",
".git/objects/9c/c57b49029a1433229c6e47b8ac0f3d0dec0d78": "21df124426ee487dd23da251fa6e6038",
".git/objects/a0/2e7c3e16cef65c3925fc15351d50e859b8b746": "1d2ccb2973c9dfe409e15a3ea5f2f31f",
".git/objects/a2/fc315581ccfc29cafa1c771ffa0a9492001e51": "ac1f15525f359103b8e4916b566ea19b",
".git/objects/a3/04db89f8917917304de64a9d1defbbe8b84d2e": "8224dac5e707a90ccf0739af50b68edb",
".git/objects/a3/63b32abc4d844524e635f43ea296787b551a81": "10633be70b4c68dcf2285477bbb0da52",
".git/objects/a7/b332dbf86799ff48cbeea7db0cfb74fd9f77e5": "3ba32be0b000bd18709af93c7a0d8bbb",
".git/objects/a7/c47052c4e186aa5e14e1f8f9f65298b10d3b82": "dbb1e05ef08ca5d0d71298961fe0cfac",
".git/objects/ac/94b317de90346a85677227d6db40a556911f4f": "bcea0a75b5f591c643c6f2a34ab1273f",
".git/objects/af/e08bdfadfd67cc74342325fd03d86ff0deebe6": "4f770811c6e4bd035d3778e45e9f2f92",
".git/objects/af/e2dbea63276f8b49fed962aa5008add6c96f8b": "c1c43a3c9d0ee6824aec1265dba9c062",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/071ba3485031ef7223425e677829fdd8e6cd4b": "fb97789f32ed5c49e12cbc842687300a",
".git/objects/b5/55a7ce4cb15f5555a22d891182d4fa9982fcff": "988dd4eaa5cc921c9ecb8d1d227c11a7",
".git/objects/b6/e249340a86f816e9df796cd158666a08975e96": "103ef064009b365f5c9cdb47e81fec27",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/f3e7a3cf83477871ca6599977d76b16ade6409": "a9b8b3936dd5526b17ae0ccb3f251e76",
".git/objects/bf/c0da86b55f94156981e6dd88aa7b0a473a829a": "041ba76f24033bf8c1b965dfe5abb97a",
".git/objects/c0/e063f769c67583ec0cc17784a7b9e43c9ab915": "fffef304e255252fb49211d58e6d3cbb",
".git/objects/c4/f96f1ecefd947a527f2e199f93712fb88981a8": "731419befa6058831d0296f0a12349be",
".git/objects/c5/10f4f4f0725fdb6852a4a92b394615e196d6e8": "293a1d6e71d75c43809c9525f46f8d44",
".git/objects/c5/f9e1a93d01fd95fa0fe1315a701fafc74d8d2c": "7f57a5c46699a5dd2ac849ffc01c7f72",
".git/objects/ca/3fbf39bc26be4443b4fc568de19f9695021832": "8d2def20130af655324cb9a2c0e62343",
".git/objects/ca/a13faf036f7a387d6db2e147a63de0f01895fa": "17125a5fb33997e14d11ca987bba184c",
".git/objects/cb/faf71211423ab861bcf59191d9711d09c827b4": "6b589e5b1fd8d6c6e359ddad28aeff14",
".git/objects/cf/f6706a0fc102d61e174b5cdda78a7e5dcbfe83": "3c21fda355f83bd8ad0d6f1e249c3c81",
".git/objects/d0/177de4f40e47b15b46e9d6a7498d657a49e3d2": "2964e658c94b8df0813a2d958f8259e0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/33e9524e6bc99577421dd63e9ffc5f9a70a1be": "87034909f0372af5e54db33161041b53",
".git/objects/dc/e2f75a2d009c4c61ea00c1ec5a8aae92a6b19c": "279c31097af7d6c8740b365647f2f702",
".git/objects/de/b798956f5c13ed198c7824ef308475102e61e2": "f055af14926672940db952ad5c03fb97",
".git/objects/df/9f24585c95848e16a9d9467b3a5442b556532b": "f23cbad974c5fca0adba6c2a49a029bd",
".git/objects/e7/b6278765c48c8c5e8efc0c184796d123ad1e1b": "e9c13b2c1e6427d84f2739c459c0801c",
".git/objects/ea/187d561a62f06bf14d4028546a2c63ac5bba8d": "1a24d6b333ff0d8578e3a304d7c6f02b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bd0dda855a88ebf0dcb7b975b055b8261f50b5": "a097b79aed57d5a185128fbb9b39e407",
".git/objects/f1/1380c16c5c9fa41a1fbfaf9c569422f1cb6006": "b9b7bad1d161d705e0251b64b6b8a820",
".git/objects/f3/4db83befdaf967697e3e98501656c621d9d116": "95bd7f0979e1d3661dd71abf3cd5d93c",
".git/objects/f8/653b2100204e4adbfc2639266ed45a34550698": "4447c56172b6867e5ebeac891483e6f8",
".git/objects/f9/65d6d4ba32b6a81793de25b0dbb7dcfc140f09": "320562df37922a4c6908528187c103f5",
".git/objects/fd/d18167c67489a6419303e96950cc46fa19b7db": "412564fad8e190b20c3071b27492c132",
".git/objects/fe/81cc1e29472f2c15723ee2f8a700cb4b5df01a": "c5b0fe451aabf02b5440776bd4c6b57d",
".git/objects/fe/b6a53b949c320e3edcf8afdd59dfd77594e1b7": "2224e115d0c9a311c9fbac94cc84e161",
".git/ORIG_HEAD": "e663247866fccd9e4da9cdda1f687069",
".git/refs/heads/master": "e663247866fccd9e4da9cdda1f687069",
".git/refs/remotes/origin/master": "e663247866fccd9e4da9cdda1f687069",
"assets/AssetManifest.bin": "6683a063a9cd91eaece4e2c0e106587b",
"assets/AssetManifest.bin.json": "01e6a68f2c58129b12c8dadf578ed35f",
"assets/AssetManifest.json": "11a7897d1108df208d19151056bef591",
"assets/FontManifest.json": "daa6cb4f3ef5c46795a886aa3d702712",
"assets/fonts/Lora-italic.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/fonts/Lora.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/avt.jpg": "ef91d87fc7e9e2e198ea09beec448b00",
"assets/images/boostrap.png": "5c58e1a23accebe5e9db738f81306211",
"assets/images/c%2523.png": "327298ec25a4ae2661f2f9e74d9e17c4",
"assets/images/css.png": "f24364a348a9f91675db9ffe3c248088",
"assets/images/dart.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/images/entityframe.png": "58fe7e59a768f4e4419c16a1c404d579",
"assets/images/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/images/html.png": "b5508b02768fda19b844ae6da8586f58",
"assets/images/java.jpg": "46659831145900027eaae3c8ce7234d5",
"assets/images/javascript.png": "d5ee029a5980fc1e164d078b7801f2bb",
"assets/images/jquery.png": "6bc97da4142391e6a90b289601267c4a",
"assets/images/json.png": "0330b1f11baf3f6ba12ba4507aba8aba",
"assets/images/mysql.png": "75188fc6059274e782d243e64e5688c8",
"assets/images/netcore.png": "5b5ac2b4ed923c08887abb68a0fe661b",
"assets/images/project01.png": "4329eaecc40329cfc90da897b5466294",
"assets/images/project02.png": "bef8ffb1ddbb3888272ab7e05693767e",
"assets/images/project03.png": "f3ce3dbb2af57204ecabb0eb478b16ca",
"assets/images/project04.png": "83bc6a7d45727dddf2aa8fac77f8138b",
"assets/images/sass.png": "3bd625947a6ac06505de5e3b60d20359",
"assets/images/sql.png": "7a76cff597d8b80b3f1dc36a28bdd39d",
"assets/NOTICES": "1346e1e0e9a7c859f532a414234d6da5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4ec5a1016361dcbf3bd2df6fadbc241f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a565d0ab8d80f6fcef15718258b08465",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"fluttericon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e4f62d8dc2907e6549a4e12c4baf909",
"/": "6e4f62d8dc2907e6549a4e12c4baf909",
"main.dart.js": "6c1c576cc22c555a4d4ba587469f33c8",
"manifest.json": "a3fdbb211801b9ff37242ed3bb666f9e",
"version.json": "5419cba0fca8ac8a2a3cdf748a857f3f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
