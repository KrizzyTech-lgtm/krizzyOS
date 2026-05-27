all:
	nasm -f elf32 boot.asm -o boot.o
	gcc -m32 -ffreestanding -c kernel.c -o kernel.o
	ld -m elf_i386 -T linker.ld boot.o kernel.o -o kernel.bin

	mkdir -p iso/boot/grub
	cp kernel.bin iso/boot/
	cp boot/grub/grub.cfg iso/boot/grub/

	grub-mkrescue -o KrizzyOS.iso iso

run:
	qemu-system-i386 -cdrom KrizzyOS.iso