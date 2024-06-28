import { getExplorerData } from './data'
import { fetchDataAndRenderTable } from './fetch'
import { navigateSilently } from './history'

const _paginationLinks = document.querySelector('#pagination-mid-container') as HTMLDivElement
const _paginationPrev = document.querySelector('#pagination-prev') as HTMLAnchorElement
const _paginationNext = document.querySelector('#pagination-next') as HTMLAnchorElement

const renderPaginationNumbers = (start: number, end: number) => {
  const { page } = getExplorerData()

  if (!_paginationLinks) {
    return
  }

  for (let i = start; i <= end; i++) {
    const _active = i === page
    _paginationLinks.innerHTML += `
        <a href="?page=${i}" data-type="goto-page" data-page="${i}" class="pagination-numbers ${_active ? 'active' : ''}">
          ${i}
        </a>
      `
  }
}

const resetPagination = () => {
  const { page, totalPage } = getExplorerData()
  _paginationPrev.href = '?page=1'
  _paginationNext.href = `?page=${totalPage}`

  if (page === 1 || totalPage < 1) {
    _paginationPrev.classList.add('disabled')
  } else {
    _paginationPrev.href = `?page=${page - 1}`
    _paginationPrev.classList.remove('disabled')
  }

  if (page === totalPage || totalPage < 1) {
    _paginationNext.classList.add('disabled')
  } else {
    _paginationNext.href = `?page=${page + 1}`
    _paginationNext.classList.remove('disabled')
  }

  _paginationLinks.innerHTML = ''

  if (totalPage === 1) {
    return
  }

  if (totalPage <= 4) {
    renderPaginationNumbers(1, totalPage)
  } else {
    const maxGap = 4 // for desktop use 6
    const frontGap = page + 1
    const inc = 1 // for desktop use 2

    if (frontGap >= maxGap) {
      renderPaginationNumbers(1, 1)
      _paginationLinks.innerHTML += `
        <div class="pagination-numbers">
        ...
        </div>
      `
      renderPaginationNumbers(page - inc, Math.min(page + inc, totalPage))
    } else {
      renderPaginationNumbers(1, page + inc)
    }

    _paginationLinks.innerHTML += `
      <div class="pagination-numbers">
      ...
      </div>
    `
    renderPaginationNumbers(totalPage, totalPage)
  }
}

const handlePageChange = async () => {
  await fetchDataAndRenderTable()
  navigateSilently()
}

export { renderPaginationNumbers, resetPagination, handlePageChange }
