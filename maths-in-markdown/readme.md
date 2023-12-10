# Maths in Markdown ✍️

- To use mathematical notation, wrap the math content in dollar signs `$...$` for inline math, and `$$...$$` for display math.

```diff
- `$..$` means inline expression.
+ `$$..$$` means display expression. (Better styled, big & centered)
! Do not leave a space between the $ and your mathematical notation.
```
### Example:

- `$\frac{1}{2}$` renders as $$\frac{1}{2}$$

- `$\sum_{n=1}^{10} n^2$` is rendered as $$\sum_{n=1}^{10} n^2$$


---

### Some basic rules:

- To **raise power**, use `^` symbol.
    * e.g. `$x^y $` is rendered as $x^y $.
<br/>

- To have something in **subscript**, use `_` symbol.
    * e.g. `$x_{y} $` is rendered as $x_{y} $.
<br/>

- To have something in **Overline (bar)**, use `\overline` symbol.
    * e.g. `$\overline{x}$` is rendered as $\overline{x}$.
<br/>

- To have something in **Underline**, use `\underline` symbol.
    * e.g. `$\underline{x}$` is rendered as $\underline{x}$.
<br/>

- For **Hat**, use `\hat` symbol.
    * e.g. `$\hat{x}$` is rendered as $\hat{x}$.
<br/>

- For **tilde**, use `\tilde` symbol.
    * e.g. `$\tilde{x}$` is rendered as $\tilde{x}$.
<br/>

---

### Left and right brackets:

- To represent **parenthesis**, use `(` and `)`.
    * e.g. `$(x+y) $` is rendered as $(x+y) $.
<br/>

- To specify the size of delimiters around a large expression: `$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$` => $$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

<br/>

- To represent **square brackets**, use `[ and ]`.
    * e.g. `$[x+y] $` is rendered as $[x+y] $.
<br/>

- To represent **curly brackets**, use `\{ and \}`.
    * e.g. `$\{x+y\} $` is rendered as $\{x+y\} $.
<br/>

- To represent **angle brackets**, use `\langle` and `\rangle`.
    * e.g. `$\langle x+y \rangle $` is rendered as $\langle x+y \rangle $.
<br/>

- To represent **floor brackets**, use `\lfloor` and `\rfloor`.
    * e.g. `$\lfloor x+y \rfloor $` is rendered as $\lfloor x+y \rfloor $.
<br/>

- To represent **ceiling brackets**, use `\lceil` and `\rceil`.
    * e.g. `$\lceil x+y \rceil $` is rendered as $\lceil x+y \rceil $.
<br/>

- `$$\left| \left( \sum_{k=1}^n a_k b_k \right)^2 \right| \leq \left| \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) \right| $$` ==>  $$\left| \left( \sum_{k=1}^n a_k b_k \right)^2 \right| \leq \left| \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right) \right| $$

---

### To represent patterns:

- `$x_{1} + x_{2} + \cdots + x_{n}$` => $x_{1} + x_{2} + \cdots + x_{n}$
<br/>

- `$x_{1}, x_{2}, \dots, x_{n}$` => $x_{1}, x_{2}, \dots, x_{n}$
<br/>

---

### Contents:

1. [Greek letters](./Greek_Letters.md)
2. [Set & trigonometry symbols](./Set_and_trigonometry_Symbols.md)
3. [Algebraic & calculus symbols](./Algebraic_and_calculus_Symbols.md)
4. [Combinatorics, probability & distributions](./combinatorics_and_probability.md)
5. [Matrix symbols](./Matrix_Symbols.md)

---
