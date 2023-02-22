RUN:=yarn

# ------------------------------------------------------------------------------------ #

define run_in_workspace
	@echo --------------------------
	@echo $(1) - $(2)
	@echo --------------------------
	$(RUN) workspace @buzap/$(1) $(2)
endef

setup:
	make clean-all
	make install
	make build-all

install:
	yarn

install-immutable:
	yarn install --immutable

# ------------------ BUILD ------------------ #

# ------------------ WATCH ------------------ #

# ------------------ CLEAR ------------------ #

define delete_build
	@echo delete_build $(1)
	rm -Rf ./packages/$(1)/dist
endef

define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./packages/$(1)/node_modules
endef

# ------------------ TEST ------------------ #

# ------------------ LINT ------------------ #

# ------------------ Lighthouse CI ------------------ #