var MyBasicComponent = zoid.create({
    tag: 'my-basic-component',
    url: new URL('child.html', window.location.href).href
});