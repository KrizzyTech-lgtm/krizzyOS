void kernel_main() {

    char* video = (char*) 0xb8000;

    video[0] = 'K';
    video[1] = 0x0F;

    video[2] = 'r';
    video[3] = 0x0F;

    video[4] = 'i';
    video[5] = 0x0F;

    video[6] = 'z';
    video[7] = 0x0F;

    video[8] = 'z';
    video[9] = 0x0F;

    video[10] = 'y';
    video[11] = 0x0F;

    video[12] = 'O';
    video[13] = 0x0F;

    video[14] = 'S';
    video[15] = 0x0F;

    while (1);
}