
console.log('herherhehr')
const run = async () => {
  const rows = document.querySelectorAll('.blob-wrapper table tr')
  let packageFound = false
  rows.forEach((row, index) => {

    // mark end of section
    if (row.lastElementChild && row.lastElementChild.innerHTML && packageFound) {
      if (row.lastElementChild.innerText.indexOf('}') !== -1) {
        packageFound = false
      }
    }

    /**
     *  mark packages here
     */
    if (packageFound && row.lastElementChild) {
      let wrapperTag = document.createElement('a')
      wrapperTag.href = 'https://www.npmjs.com/package/' + row.lastElementChild.firstElementChild.innerText.slice(1, -1)
      wrapperTag.target = '_blank'
      let oldChild = row.lastElementChild.firstElementChild
      row.lastElementChild.insertBefore(wrapperTag, row.lastElementChild.firstElementChild)
      wrapperTag.append(oldChild)
      row.lastElementChild.firstElementChild.style.backgroundColor = 'yellow'
    }

    // mark start of section
    if (row.lastElementChild && row.lastElementChild.firstElementChild) {
      if (row.lastElementChild.firstElementChild.innerText === '"dependencies"') {
        packageFound = true
      }

      if (row.lastElementChild.firstElementChild.innerText === '"devDependencies"') {
        packageFound = true
      }
    }

  })
}

run()




