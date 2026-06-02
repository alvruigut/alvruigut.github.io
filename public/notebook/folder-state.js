const NOTEBOOK_FOLDER_STATE_KEY = 'notebook-folder-open-state'

function getFolderPath(detail) {
  const segments = []
  let current = detail

  while (current && current.matches('details.vault-folder')) {
    const summary = current.querySelector('summary')
    if (summary) {
      segments.unshift(summary.textContent.trim())
    }
    current = current.parentElement?.closest('details.vault-folder')
  }

  return segments.join(' / ')
}

function loadFolderState() {
  try {
    return JSON.parse(localStorage.getItem(NOTEBOOK_FOLDER_STATE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveFolderState(state) {
  localStorage.setItem(NOTEBOOK_FOLDER_STATE_KEY, JSON.stringify(state))
}

document.addEventListener('DOMContentLoaded', () => {
  const folderState = loadFolderState()
  const folders = Array.from(document.querySelectorAll('details.vault-folder'))

  folders.forEach((folder) => {
    const key = getFolderPath(folder)
    if (key && folderState[key] !== undefined) {
      folder.open = folderState[key]
    }

    folder.addEventListener('toggle', () => {
      folderState[key] = folder.open
      saveFolderState(folderState)
    })
  })

  const activeFile = document.querySelector('.vault-file.is-active')
  if (activeFile) {
    let parentFolder = activeFile.parentElement?.closest('details.vault-folder')
    while (parentFolder) {
      parentFolder.open = true
      const key = getFolderPath(parentFolder)
      if (key) {
        folderState[key] = true
      }
      parentFolder = parentFolder.parentElement?.closest('details.vault-folder')
    }
    saveFolderState(folderState)
  }
})
