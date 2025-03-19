async function doDelete() {

  var elements = document.getElementsByTagName('article');

  while(elements.length > 0) {
  	elements = document.getElementsByTagName('article');
  	const article = elements[0];
    
    // 找到 article 内的所有 button 元素
    const btns = article.getElementsByTagName('button');
    if (btns.length < 2) {
      console.warn(`第 ${i + 1} 个 article 中没有足够的按钮`);
      continue; // 如果按钮不足，跳过当前 article
    }

    // 点击第一个按钮（假设是删除按钮）
    btns[0].click();
    await sleep(1000);

    // 点击菜单中的第一个选项（假设是删除选项）
    const menuItems = document.querySelectorAll('div[role="menuitem"]');
    if (menuItems.length === 0) {
      console.warn(`第 ${i + 1} 个 article 的菜单未找到`);
      continue; // 如果菜单未找到，跳过当前 article
    }
    menuItems[0].click();
    await sleep(1000);

    // 找到确认对话框并点击确认按钮
    const confirmDlg = document.querySelectorAll('div[data-testid="confirmationSheetDialog"]')[0];
    if (!confirmDlg) {
      console.warn(`第 ${i + 1} 个 article 的确认对话框未找到`);
      continue; // 如果确认对话框未找到，跳过当前 article
    }

    const confirmBtn = confirmDlg.getElementsByTagName('button')[0];
    if (!confirmBtn) {
      console.warn(`第 ${i + 1} 个 article 的确认按钮未找到`);
      continue; // 如果确认按钮未找到，跳过当前 article
    }
    confirmBtn.click();
    await sleep(1000);
  }
}

// 工具函数：延迟执行
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//执行函数
doDelete()
