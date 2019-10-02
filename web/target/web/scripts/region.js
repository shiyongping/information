function getRegionTabHtml(regionArray, regionType, regionClick) {
    var content = "<div class='region'><ul>";
    for (var i = 0, j = regionArray.length; i < j; i++) {
        content = content + "<li><a href='#none' onclick=\"" + regionClick + "('" + regionArray[i].regionCode + "','" + regionArray[i].regionName + "','" + regionType + "')\">" + regionArray[i].regionName + "</a></li>";
    }
    content = content + "</ul></div>";
    return content;
}
function initRegionTabHtml(contextPath, tabs, tab, regionId, regionType, regionClick) {
    $.ajax({
        url: contextPath + "/ba/region/getregionlist?regionId=" + regionId,
        success: function (text) {
            var resultDto = mini.decode(text);
            if (resultDto.result == 1) {
                var el = tabs.getTabBodyEl(tab);
                el.innerHTML = getRegionTabHtml(resultDto.data, regionType, regionClick);
            } else {
                wmsErrorAlert(resultDto.message);
            }
        },
        error: function () {
            wmsErrorAlert("未知异常");
        }
    });
}
function initRegion2(contextPath, tabs, combRegion, regionType, regionClick) {
    if (tabs.getTabs().length == 0) {
        if (combRegion.value != "") {
            //获取地区数据
            $.ajax({
                url: contextPath + "/ba/region/getone?id=" + combRegion.value,
                success: function (text) {
                    var resultDto = mini.decode(text);
                    if (resultDto.result == 1) {
                        //添加省份tab
                        var provinceTab = {};
                        provinceTab.name = resultDto.data.provinceId;
                        provinceTab.title = resultDto.data.provinceName;
                        tabs.addTab(provinceTab);

                        var provinceId = mini.get("#" + combRegion.id + "_provinceId");
                        var provinceName = mini.get("#" + combRegion.id + "_provinceName");
                        provinceId.setValue(resultDto.data.provinceId);
                        provinceName.setValue(resultDto.data.provinceName);
                        combRegion.setText(resultDto.data.provinceName);

                        initRegionTabHtml(contextPath, tabs, provinceTab, "1000", "10", regionClick);
                        if (regionType == "10") {
                            tabs.activeTab(provinceTab);
                        }
                        //添加城市tab
                        if (regionType == "20" || regionType == "30" || regionType == "40") {
                            var cityTab = {};
                            cityTab.name = resultDto.data.cityId;
                            cityTab.title = resultDto.data.cityName;
                            tabs.addTab(cityTab);
                            initRegionTabHtml(contextPath, tabs, cityTab, resultDto.data.provinceId, "20", regionClick);
                            if (regionType == "20") {
                                tabs.activeTab(cityTab);
                            }

                            var cityId = mini.get("#" + combRegion.id + "_cityId");
                            var cityName = mini.get("#" + combRegion.id + "_cityName");
                            cityId.setValue(resultDto.data.cityId);
                            cityName.setValue(resultDto.data.cityName);
                            combRegion.setText(resultDto.data.cityName);
                        }
                        //添加区域tab
                        if (regionType == "30" || regionType == "40") {
                            var districtTab = {};
                            districtTab.name = resultDto.data.districtId;
                            districtTab.title = resultDto.data.districtName;
                            tabs.addTab(districtTab);
                            initRegionTabHtml(contextPath, tabs, districtTab, resultDto.data.cityId, "30", regionClick);
                            if (regionType == "30") {
                                tabs.activeTab(districtTab);
                            }

                            var districtId = mini.get("#" + combRegion.id + "_districtId");
                            var districtName = mini.get("#" + combRegion.id + "_districtName");
                            districtId.setValue(resultDto.data.districtId);
                            districtName.setValue(resultDto.data.districtName);
                            combRegion.setText(resultDto.data.districtName);
                        }
                        //添加街道tab
                        if (regionType == "40") {
                            var streetTab = {};
                            streetTab.name = resultDto.data.streetId;
                            streetTab.title = resultDto.data.streetName;
                            tabs.addTab(streetTab);
                            initRegionTabHtml(contextPath, tabs, streetTab, resultDto.data.districtId, "40", regionClick);
                            tabs.activeTab(streetTab);

                            var streetId = mini.get("#" + combRegion.id + "_streetId");
                            var streetName = mini.get("#" + combRegion.id + "_streetName");
                            streetId.setValue(resultDto.data.streetId);
                            streetName.setValue(resultDto.data.streetName);
                            combRegion.setText(resultDto.data.streetName);
                        }

                    } else {
                        wmsErrorAlert(resultDto.message);
                    }
                    //grid.reload();
                },
                error: function () {
                    wmsErrorAlert("未知异常");
                }
            });
        } else {
            //显示省份数据
            var provinceTab = {};
            provinceTab.name = id;
            provinceTab.title = "请选择";
            tabs.addTab(provinceTab);
            tabs.activeTab(provinceTab);
            initRegionTabHtml(contextPath, tabs, provinceTab, "1000", "10", regionClick);
            if (regionType == "10") {
                tabs.activeTab(provinceTab);
            }
        }
    }
}

