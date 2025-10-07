module.exports = client => {
    client.user.setPresence({activity: {name: "Developed By Ponche#6600", type: "PLAYING"}, status: "idle"});
};

//---------------------------------------------------
//type: PLAYING, WATCHING !!!! Sağdaki değerler Oynuyor/İzliyor
//status: online, idle, dnd  !!!! Sırasıyla: Çevrimiçi, Boşta, Rahatsız Etmeyin
// Name kısmını istediğiniz gibi ayarlayabilirsiniz, Type/Status değerlerini yukarıdaki değerlerden başka girmeyin.
