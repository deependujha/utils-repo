# Make a qrcode in typescript 👨‍💻🚀🔥

- There are several libraries available for generating QR codes in JavaScript, such as **qrcode.js**, **qr-generator**, and **jsQR**.

- This project uses **qrcode.js**.

---

## Steps 🖥️

- Install the library and its type:

```sh
npm install qrcode
npm i --save-dev @types/qrcode
```

- Import the library in your React component:
  
``` js
import QRCode from 'qrcode'
```

- Use the useEffect hook to generate the QR code when the component is rendered:

```js
import { useEffect } from 'react'

const MyComponent = () => {

  useEffect(() => {
    QRCode.toCanvas(document.getElementById('qrcode'), 'https://www.example.com')
  }, [])
  return (
    <div>
        <canvas id="qrcode"></canvas>
    </div>
  )
}
```

We can also pass options to customize the appearance of the QR code, such as the size, color, and error correction level.

```js
// example:
QRCode.toCanvas(document.getElementById('qrcode'), 'https://www.example.com', {
  width: 200,
  color: {
    dark: "#000000", // qr code color
    light: "#ffffff" // background color
  },
  errorCorrectionLevel: 'H'
});

```

In QR code, "L", "M", "Q", and "H" are the four levels of error correction that can be applied to the code.

- "L" level error correction allows for up to 7% of the total QR code data to be restored if it becomes damaged or unreadable. This level is suitable for QR codes that will be used in low-noise environments and/or will be printed at high resolutions.

- "M" level error correction allows for up to 15% of the total QR code data to be restored if it becomes damaged or unreadable. This level is a good balance between error protection and QR code size, and is suitable for many general-purpose QR code applications.

- "Q" levelEach level provides a different level of protection against errors, with "L" providing the least protection and "H" providing the most. The error correction level chosen will depend on the amount of data being encoded and the intended use of the QR code (e.g. if it will be used in a high-noise environment or will be printed at a low resolution). error correction allows for up to 25% of the total QR code data to be restored if it becomes damaged or unreadable. This level of error correction is useful for QR codes that will be printed at low resolutions or will be used in environments with moderate levels of noise.

- "H" level error correction allows for up to 30% of the total QR code data to be restored if it becomes damaged or unreadable. This level of error correction is the most robust, making it suitable for QR codes that will be used in high-noise environments or will be printed at low resolutions.

In summary, **the higher the error correction level, the more data that can be restored if the QR code becomes damaged or unreadable, but the larger the QR code will be**.
