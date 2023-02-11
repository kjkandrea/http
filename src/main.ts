export function main() {
  fetch('https://picsum.photos/200/300').then(response => {
    console.log('content-type :', response.headers.get('content-type'));
    console.log('content-length :', response.headers.get('content-length'));
  });
}

main();
