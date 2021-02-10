basic.forever(function () {
    if (input.acceleration(Dimension.X) > -840 && input.acceleration(Dimension.X) < -672) {
        music.playTone(131, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > -672 && input.acceleration(Dimension.X) < -504) {
        music.playTone(147, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > -504 && input.acceleration(Dimension.X) < -336) {
        music.playTone(165, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > -336 && input.acceleration(Dimension.X) < -168) {
        music.playTone(196, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > -168 && input.acceleration(Dimension.X) < 0) {
        music.playTone(220, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > 0 && input.acceleration(Dimension.X) < 204) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > 204 && input.acceleration(Dimension.X) < 408) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > 408 && input.acceleration(Dimension.X) < 612) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > 612 && input.acceleration(Dimension.X) < 816) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (input.acceleration(Dimension.X) > 816 && input.acceleration(Dimension.X) < 1020) {
        music.playTone(440, music.beat(BeatFraction.Half))
    }
})
