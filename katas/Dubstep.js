function songDecoder(song){
    return song.replace(/(WUB)+/g," ")
  }
  console.log(songDecoder("WUBWUBAWUBFRIENDWUBISWUBWUBALLWUBWUBWUBYOUWUBWUBNEED"));