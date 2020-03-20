package handler

import (
	"encoding/json"
	"net/http"

	"github.com/labstack/echo"
	"github.com/zawawahoge/youtube-information/api/service"
)

type commonServiceHandler struct {
	common service.CommonServiceServer
}

const (
	listSubscribedChannelsPath = "v1/channels"
)

// HandleCommonService is method of handling common service.
func HandleCommonService(e *echo.Echo, common service.CommonServiceServer) {
	handler := &commonServiceHandler{
		common: common,
	}

	e.GET(listSubscribedChannelsPath, handler.listSubscribedChannels)
}

func (h *commonServiceHandler) listSubscribedChannels(c echo.Context) error {
	req := &service.ListSubscribedChannelsRequest{}
	ctx := c.Request().Context()
	res, err := h.common.ListSubscribedChannels(ctx, req)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	return json.NewEncoder(c.Response()).Encode(res)
}
