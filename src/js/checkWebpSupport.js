function testWebPSupport() {
  return new Promise(resolve => {
    const webp =
      'data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAFAJiWkAANwAP79NmgA';
    const test_img = new Image();
    test_img.src = webp;
    test_img.onerror = e => resolve(false);
    test_img.onload = e => resolve(true);
  });
}

(async () => {
  const supports_webp = await testWebPSupport();
  console.log('this browser supports webp images:', supports_webp);

  if (!supports_webp) {
    document.body.classList.add('no-webp');
  }
})();
