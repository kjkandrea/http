export function main() {
  fetch('https://picsum.photos/200/300').then(response => {
    console.group(response.url);
    console.log('status :', response.status);
    console.log('content-type :', response.headers.get('content-type'));
    console.log('content-length :', response.headers.get('content-length'));
    console.groupEnd();
  });
}

main();
