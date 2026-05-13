// Глобальная база данных каналов и радио по странам
// TVSPUTNIK - Поисковой робот ТВ каналов и Радио

const channelsData = {
    // Россия
    "RU": {
        name: "Россия",
        channels: [
            {
                id: "ru-1",
                name: "Первый канал",
                type: "video",
                url: "https://edge1.1internet.tv/dash-live2/streams/1tv-dvr/1tvdash.mpd",
                icon: "📺"
            },
            {
                id: "ru-2",
                name: "Россия 24",
                type: "video",
                url: "https://streaming.russia.tv/live/rossiya24/playlist.m3u8",
                icon: "📺"
            },
            {
                id: "ru-3",
                name: "Маяк FM",
                type: "audio",
                url: "https://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps",
                icon: "🎵"
            },
            {
                id: "ru-4",
                name: "Вести FM",
                type: "audio",
                url: "https://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_192kbps",
                icon: "🎵"
            }
        ]
    },
    
    // США
    "US": {
        name: "США",
        channels: [
            {
                id: "us-1",
                name: "NASA TV",
                type: "video",
                url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
                icon: "📺"
            },
            {
                id: "us-2",
                name: "ABC News",
                type: "video",
                url: "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
                icon: "📺"
            },
            {
                id: "us-3",
                name: "NPR News",
                type: "audio",
                url: "https://npr-ice.streamguys1.com/live.mp3",
                icon: "🎵"
            }
        ]
    },
    
    // Великобритания
    "GB": {
        name: "Великобритания",
        channels: [
            {
                id: "gb-1",
                name: "BBC News",
                type: "video",
                url: "https://vs-hls-push-uk-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
                icon: "📺"
            },
            {
                id: "gb-2",
                name: "Sky News",
                type: "video",
                url: "https://skynews.ez-cdn.com/ez_live.m3u8",
                icon: "📺"
            },
            {
                id: "gb-3",
                name: "BBC Radio 1",
                type: "audio",
                url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
                icon: "🎵"
            }
        ]
    },
    
    // Германия
    "DE": {
        name: "Германия",
        channels: [
            {
                id: "de-1",
                name: "DW Deutsch",
                type: "video",
                url: "https://dwamdstream102.akamaized.net/hls/live/2013293/dwstream102/index.m3u8",
                icon: "📺"
            },
            {
                id: "de-2",
                name: "ARD Live",
                type: "video",
                url: "https://mcdn.daserste.de/daserste/de/master.m3u8",
                icon: "📺"
            },
            {
                id: "de-3",
                name: "Deutschlandfunk",
                type: "audio",
                url: "https://st01.sslstream.dlf.de/dlf/01/high/aac/stream.aac",
                icon: "🎵"
            }
        ]
    },
    
    // Франция
    "FR": {
        name: "Франция",
        channels: [
            {
                id: "fr-1",
                name: "France 24",
                type: "video",
                url: "https://static.france24.com/live/F24_FR_HI_HLS/live_web.m3u8",
                icon: "📺"
            },
            {
                id: "fr-2",
                name: "TF1 Info",
                type: "video",
                url: "https://tf1-hls-live-ssl.tf1.fr/tf1/1/hls/live_2328.m3u8",
                icon: "📺"
            },
            {
                id: "fr-3",
                name: "France Inter",
                type: "audio",
                url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
                icon: "🎵"
            }
        ]
    },
    
    // Испания
    "ES": {
        name: "Испания",
        channels: [
            {
                id: "es-1",
                name: "RTVE 24h",
                type: "video",
                url: "https://rtvelivestream.akamaized.net/rtvesec/24h/24h_main_720.m3u8",
                icon: "📺"
            },
            {
                id: "es-2",
                name: "La Sexta",
                type: "video",
                url: "https://d2qj8ujxvnqz7.cloudfront.net/hls/lasexta.m3u8",
                icon: "📺"
            },
            {
                id: "es-3",
                name: "Radio Nacional",
                type: "audio",
                url: "https://rtvehlsvodlive.akamaized.net/segments/rne/rne_r1_main.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Италия
    "IT": {
        name: "Италия",
        channels: [
            {
                id: "it-1",
                name: "RAI News 24",
                type: "video",
                url: "https://mediapolis.rai.it/redirect/v1/canale/raisudtirol?output=m3u8",
                icon: "📺"
            },
            {
                id: "it-2",
                name: "Sky TG24",
                type: "video",
                url: "https://hlslive-web-gcdn-skycdn-it.akamaized.net/live/TG24/playlist.m3u8",
                icon: "📺"
            },
            {
                id: "it-3",
                name: "Radio Italia",
                type: "audio",
                url: "https://radioitalia-lh.akamaihd.net/i/radioitalia_1@329605/master.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Китай
    "CN": {
        name: "Китай",
        channels: [
            {
                id: "cn-1",
                name: "CCTV News",
                type: "video",
                url: "https://news.cgtn.com/resource/live/video/cgtn-news/cgtn-news.m3u8",
                icon: "📺"
            },
            {
                id: "cn-2",
                name: "CGTN",
                type: "video",
                url: "https://live.cgtn.com/1000/prog_index.m3u8",
                icon: "📺"
            }
        ]
    },
    
    // Япония
    "JP": {
        name: "Япония",
        channels: [
            {
                id: "jp-1",
                name: "NHK World",
                type: "video",
                url: "https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-tokyo/index.m3u8",
                icon: "📺"
            },
            {
                id: "jp-2",
                name: "J-Wave",
                type: "audio",
                url: "https://radiko.jp/#!/live/FMJ",
                icon: "🎵"
            }
        ]
    },
    
    // Канада
    "CA": {
        name: "Канада",
        channels: [
            {
                id: "ca-1",
                name: "CBC News",
                type: "video",
                url: "https://cbcradiolive.akamaized.net/hls/live/2041057/CBCR1-TOR/master.m3u8",
                icon: "📺"
            },
            {
                id: "ca-2",
                name: "CBC Radio One",
                type: "audio",
                url: "https://cbc_r1_tor.akamaized.net/hls/live/2041057/CBCR1-TOR/master.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Австралия
    "AU": {
        name: "Австралия",
        channels: [
            {
                id: "au-1",
                name: "ABC News Australia",
                type: "video",
                url: "https://abc-iview-mediapackagewest.au.free.westcentral1.azuredatabox.net/out/v1/28e5d97d08b547bbad55f0c7d0c9e9e0/index.m3u8",
                icon: "📺"
            },
            {
                id: "au-2",
                name: "ABC Radio National",
                type: "audio",
                url: "https://live-radio01.mediahubaustralia.com/2RNW/mp3/",
                icon: "🎵"
            }
        ]
    },
    
    // Бразилия
    "BR": {
        name: "Бразилия",
        channels: [
            {
                id: "br-1",
                name: "TV Brasil",
                type: "video",
                url: "https://tvbrasil-e.akamaihd.net/hls/live/201590/tvbrasil/playlist.m3u8",
                icon: "📺"
            },
            {
                id: "br-2",
                name: "Globo News",
                type: "video",
                url: "https://globonews.globo.com/live/",
                icon: "📺"
            }
        ]
    },
    
    // Индия
    "IN": {
        name: "Индия",
        channels: [
            {
                id: "in-1",
                name: "DD News",
                type: "video",
                url: "https://ddindia-i.akamaihd.net/hls/live/301266/ddindia/ddindia_720p.m3u8",
                icon: "📺"
            },
            {
                id: "in-2",
                name: "All India Radio",
                type: "audio",
                url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Южная Корея
    "KR": {
        name: "Южная Корея",
        channels: [
            {
                id: "kr-1",
                name: "Arirang TV",
                type: "video",
                url: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8",
                icon: "📺"
            },
            {
                id: "kr-2",
                name: "KBS World Radio",
                type: "audio",
                url: "https://kbsworldradio-secure.akamaized.net/hls/live/2039847/kwr_kor/master.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Турция
    "TR": {
        name: "Турция",
        channels: [
            {
                id: "tr-1",
                name: "TRT World",
                type: "video",
                url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
                icon: "📺"
            },
            {
                id: "tr-2",
                name: "TRT Haber",
                type: "video",
                url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
                icon: "📺"
            }
        ]
    },
    
    // Польша
    "PL": {
        name: "Польша",
        channels: [
            {
                id: "pl-1",
                name: "TVP Info",
                type: "video",
                url: "https://www.tvp.pl/api/channels/get_entry?channel_id=63763368",
                icon: "📺"
            },
            {
                id: "pl-2",
                name: "Polskie Radio",
                type: "audio",
                url: "https://stream.polskieradio.pl/pr1/pr1.sdp/playlist.m3u8",
                icon: "🎵"
            }
        ]
    },
    
    // Нидерланды
    "NL": {
        name: "Нидерланды",
        channels: [
            {
                id: "nl-1",
                name: "NOS Nieuws",
                type: "video",
                url: "https://opendata.nos.nl/live/ll/stream.m3u8",
                icon: "📺"
            },
            {
                id: "nl-2",
                name: "Radio 1",
                type: "audio",
                url: "https://icecast.omroep.nl/radio1-bb-mp3",
                icon: "🎵"
            }
        ]
    },
    
    // Швеция
    "SE": {
        name: "Швеция",
        channels: [
            {
                id: "se-1",
                name: "SVT Nyheter",
                type: "video",
                url: "https://ed2.cdn.svt.se/ed7/d1/c/se/svt1/manifest.mpd",
                icon: "📺"
            },
            {
                id: "se-2",
                name: "Sveriges Radio P1",
                type: "audio",
                url: "https://http-live.sr.se/sr/p1-mp3-192",
                icon: "🎵"
            }
        ]
    },
    
    // Норвегия
    "NO": {
        name: "Норвегия",
        channels: [
            {
                id: "no-1",
                name: "NRK Nyheter",
                type: "video",
                url: "https://nrk-nrk-jenta.akamaized.net/20/0h/2htf/151222_1930_nrkn_01.m3u8",
                icon: "📺"
            },
            {
                id: "no-2",
                name: "NRK P1",
                type: "audio",
                url: "https://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_mp3_h",
                icon: "🎵"
            }
        ]
    },
    
    // Мексика
    "MX": {
        name: "Мексика",
        channels: [
            {
                id: "mx-1",
                name: "Televisa News",
                type: "video",
                url: "https://linear-416.frequency.stream/dist/ximtv/416/hls/master/playlist.m3u8",
                icon: "📺"
            }
        ]
    },
    
    // Аргентина
    "AR": {
        name: "Аргентина",
        channels: [
            {
                id: "ar-1",
                name: "TN Todo Noticias",
                type: "video",
                url: "https://live-edge01.telecentro.net.ar/live/smil:TN.smil/playlist.m3u8",
                icon: "📺"
            }
        ]
    }
};

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = channelsData;
}
